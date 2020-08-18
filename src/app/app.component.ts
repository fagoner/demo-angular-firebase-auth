import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public username: string = '';
  public password: string = '';

  constructor(public auth: AngularFireAuth) {
    
  }
  title = 'firebase-auth-demo';

  login(): void {
    this.auth.signInWithEmailAndPassword(this.username, this.password);
    this.password = '';
  }

  logout(): void {
    this.auth.signOut();
  }
}
