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
    this.postsCollection = this.afs.collection('posts/');
    // this.postDoc = this.afs.doc('posts/');
    this.posts = this.postsCollection.valueChanges();
  }

  getAllPosts() {

  }

  createPost(post) {
    this.postsCollection.add(post);
  }
}
