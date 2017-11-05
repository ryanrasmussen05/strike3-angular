import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as firebase from 'firebase';

@Injectable()
export class UserModel {
  currentUser$: BehaviorSubject<firebase.User> = new BehaviorSubject<firebase.User>(null);

  init() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setCurrentUser(user);
    });
  }

  setCurrentUser(user: firebase.User) {
    console.log('set user');
    this.currentUser$.next(user);
  }
}
