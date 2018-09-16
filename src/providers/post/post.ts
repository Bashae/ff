import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from 'angularfire2/firestore';
import { updateDate } from 'ionic-angular/umd/util/datetime-util';
import * as firebase from 'firebase/app';
import AP = firebase.auth.AuthProvider;
import { Observable } from 'rxjs-compat';

import { Post } from "../../app/post";

@Injectable()
export class PostProvider {
  postsCollection: AngularFirestoreCollection<any>;
  posts: Observable<any[]>;
  postDoc: AngularFirestoreDocument;

  constructor(public afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts');
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

  createPost(post: Post) {
    // this.postsCollection.add(post);
  }

  likePost(post) {
    // let id = p
    // let doc = this.afs.doc('posts/')
  }

  favoritePost() {

  }

  unlikePost() {

  }

  unfavoritePost() {

  }
}
