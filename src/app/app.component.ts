import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyA33V8M5vq98vE8PvML6GWhDEP_ZoqmEoA",
      authDomain: "project-142ec.firebaseapp.com",
      databaseURL: "https://project-142ec.firebaseio.com",
      projectId: "project-142ec",
      storageBucket: "project-142ec.appspot.com",
      messagingSenderId: "550909551366"
    };
    firebase.initializeApp(config);
  } //oninit
}
