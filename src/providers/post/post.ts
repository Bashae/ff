import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from 'angularfire2/firestore';
import { updateDate } from 'ionic-angular/umd/util/datetime-util';
import * as firebase from 'firebase/app';
import AP = firebase.auth.AuthProvider;
import { Observable } from 'rxjs-compat';

import { Post } from "../../app/post";
import { AuthProvider } from '../auth/auth';
import { query } from '@angular/core/src/render3/instructions';

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

  constructor(public afs: AngularFirestore, public auth: AuthProvider) {
    this.postsCollection = this.afs.collection('posts');
    this.likesCollection = this.afs.collection('likes');
    this.favoritesCollection = this.afs.collection('favorites');
  }

  getPost(post) {
    this.postDoc = this.afs.doc('posts/' + post);
    // console.log(this.postDoc);
  }

  getAllPosts() {
    // this.posts = this.postsCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Post;
    //     const id = a.payload.doc.id;

    //     console.log(id);
    //     console.log(data);
    //     return { id, ...data };
    //   });
    // });
    this.posts = this.postsCollection.valueChanges();
    return this.postsCollection.ref
      .limit(3)
      .get();

    // this.posts = this.postsCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as Post;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   }))
    // );
  }

  createPost(post: Post) {
    this.postsCollection.add(post)
      .then(docRef => {
        console.log('document created')
        console.log(post)
      })
      .catch(err => {
        console.log('document creation error')
        console.log(err)
      })
  }

  likePost(post: Post) {
    let doc = this.afs.doc('posts/' + post.id);
    doc.update(post);

    this.createLike(post.id);
  }

  unlikePost(post: Post) {
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

  createLike(postId) {
    let like = {'u_id': this.auth.user.uid, 'p_id': postId};
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

  getUserFavorites(postId) {
    return this.favoritesCollection.ref
      .where('u_id', '==', this.auth.user.uid)
      .where('p_id', '==', postId)
      .get();
  }
}
