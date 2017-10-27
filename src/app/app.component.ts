import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserModel } from './user/user.model';
import { UserService } from './user/user.service';

//TODO
declare let $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  config = {
    apiKey: 'AIzaSyAJG85EJA1lBmYS31zcOqjSECZ2YSpWHxo',
    authDomain: 'strike3-31769.firebaseapp.com',
    databaseURL: 'https://strike3-31769.firebaseio.com/',
    storageBucket: 'strike3-31769'
  };

  constructor(public userModel: UserModel, public userService: UserService) {
  }

  ngOnInit(): void {
    firebase.initializeApp(this.config);
    this.userModel.init();
  }

  //TODO does this have to be here?
  ngAfterViewInit(): void {
    $('body').foundation();
  }

  signIn() {
    this.userService.signIn('ryanrasmussen05@gmail.com', '123456');
  }

  signOut() {
    this.userService.signOut();
  }
}
