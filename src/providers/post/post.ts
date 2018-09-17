import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from 'angularfire2/firestore';
import { updateDate } from 'ionic-angular/umd/util/datetime-util';
import * as firebase from 'firebase/app';
import AP = firebase.auth.AuthProvider;
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

  constructor(public afs: AngularFirestore, public auth: AuthProvider) {
    this.postsCollection = this.afs.collection('posts');
    this.likesCollection = this.afs.collection('likes');
    // this.postDoc = this.afs.doc('posts/');
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
    this.posts = this.postsCollection.snapshotChanges();
    return this.posts;

    // this.posts = this.postsCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as Post;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   }))
    // );
  }

  createPost(post: Post, id: string) {
    // this.postsCollection.add(post);
  }

  likePost(post: Post) {
    let doc = this.afs.doc('posts/' + post.id);
    doc.update(post);
  }

  favoritePost() {

  }

  unlikePost(post: Post) {
    this.destroyLike(post.id);

    // let doc = this.afs.doc('posts/' + post.id);
    // doc.update(post);
  }

  unfavoritePost() {

  }

  createLike() {

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

    // selectedItems.ref.get()
    //   .then(
    //   res => {res.forEach(element => { console.log(element.  );})})
    //   .catch(
    //     res => {console.log(res)}
    //   )
    // // console.log(a);
    // // a.destroy();
  }
}
