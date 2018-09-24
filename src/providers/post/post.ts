import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';

import { Post } from "../../app/post";
import { AuthProvider } from '../auth/auth';

@Injectable()
export class PostProvider {
  postsCollection: AngularFirestoreCollection<any>;
  posts: Observable<any[]>;
  postDoc: AngularFirestoreDocument;

  likesCollection: AngularFirestoreCollection<any>;
  likes: Observable<any[]>;
  likeDoc;

  favoritesCollection: AngularFirestoreCollection<any>;
  favorites: Observable<any[]>;
  favoriteDoc;

  lastDoc: AngularFirestoreDocument;

  constructor(public afs: AngularFirestore, public auth: AuthProvider) {
    this.postsCollection = this.afs.collection('posts');
    this.likesCollection = this.afs.collection('likes');
    this.favoritesCollection = this.afs.collection('favorites');
  }

  getPost(post) {
    this.postDoc = this.afs.doc('posts/' + post);
  }

  getStartPosts() {
    this.posts = this.postsCollection.valueChanges();
    return this.postsCollection.ref
      .limit(5)
      .orderBy('timestamp')
      .get();
  }

  getNextPosts(lastItem) {
    this.posts = this.postsCollection.valueChanges();
    return this.postsCollection.ref
      .limit(5)
      .orderBy('timestamp')
      .startAfter(lastItem)
      .get();
  }

  createPost(post: Post) {
    const timestamp = new Date().getTime();
    let cardId = this.afs.createId();

    post.id = cardId;
    post.timestamp = timestamp * -1;

    this.postsCollection.add(post)
      .then(docRef => {
        post.id = docRef.id;
        let doc = this.afs.doc('posts/' + docRef.id);
        doc.update(post);
      });
  }

  likePost(post: Post, type: string) {
    let doc = this.afs.doc('posts/' + post.id);
    doc.update(post);

    this.createLike(post.id, type);
  }

  unlikePost(post: Post, type: string) {
    let doc = this.afs.doc('posts/' + post.id);
    doc.update(post);

    this.destroyLike(post.id);
  }

  favoritePost(post: Post) {
    let doc = this.afs.doc('posts/' + post.id);
    doc.update(post);

    this.createFavorite(post.id);
  }

  unfavoritePost(post: Post) {
    let doc = this.afs.doc('posts/' + post.id);
    doc.update(post);

    this.destroyFavorite(post.id);
  }

  createFavorite(postId) {
    let favorite = {'u_id': this.auth.user.uid, 'p_id': postId};
    this.favoritesCollection.add(favorite)
      .then(docRef => {
        console.log('document created')
        console.log(docRef)
      })
      .catch(err => {
        console.log('document creation error')
        console.log(err)
      })
  }

  destroyFavorite(postId) {
    // Combine Destroys and Creates?
    // Into Categories and just pass type of category?
    // Or break into own Providers/Services?
    // LikeProvider, FavoriteProvider
    // TODO Clean
    let thing;
    let selectedItems = this.afs.collection('favorites', ref => 
      thing = ref.where('u_id', '==', this.auth.user.uid)
        .where('p_id', '==', postId));

    thing.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }

  createLike(postId, type) {
    console.log('create like');
    let like = {'u_id': this.auth.user.uid, 'p_id': postId, 'type': type};
    this.likesCollection.add(like)
      .then(docRef => {
        console.log('document created')
        console.log(docRef)
      })
      .catch(err => {
        console.log('document creation error')
        console.log(err)
      })
  }

  updateLike(post: Post, type: string) {
    console.log('update like');
    let thing;
    let selectedItems = this.afs.collection('likes', ref => 
      thing = ref.where('u_id', '==', this.auth.user.uid)
         .where('p_id', '==', post.id));

    thing.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.update("type", type);
      });
    });
  }

  destroyLike(postId) {
    // TODO Clean
    let thing;
    let selectedItems = this.afs.collection('likes', ref => 
      thing = ref.where('u_id', '==', this.auth.user.uid)
         .where('p_id', '==', postId));

    thing.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }

  getUserLikes(postId) {
    return this.likesCollection.ref
      .where('u_id', '==', this.auth.user.uid)
      .where('p_id', '==', postId)
      .get();
  }

  getGoodLikes() {
    console.log('testing likes things');
    console.log(this.auth.isLoggedIn);
    console.log(this.auth.user)
    return this.likesCollection.ref
      .where('u_id', '==', this.auth.user.uid)
      .where('type', '==', 'good')
      .get();
  }

  getBadLikes() {
    return this.likesCollection.ref
      .where('u_id', '==', this.auth.user.uid)
      .where('type', '==', 'bad')
      .get();
  }

  getUserFavorites(postId) {
    return this.favoritesCollection.ref
      .where('u_id', '==', this.auth.user.uid)
      .where('p_id', '==', postId)
      .get();
  }
}
