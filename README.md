# FirebaseAuthDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.


## Requeriments

```
ng add @angular/fire
```


## Steps

### @angular/fire

[@angular/fire demo setup](https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)


### Set environment config

Add the firebase configuration on  `src/environments/environment.ts`
```
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

Then import the module: `AngularFireModule` and `AngularFireAuthModule` on `src/app/app.module.ts`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```


### Component
```
###Component
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

  constructor(public auth: AngularFireAuth) {}
  title = 'firebase-auth-demo';

  login(): void {
    this.auth.signInWithEmailAndPassword(this.username, this.password);
    this.password = '';
  }

  logout(): void {
    this.auth.signOut();
  }
}
```
### Template

```
<div *ngIf="auth.user | async as user; else showLogin">
  <h2>Hello {{user.displayName}} - {{user.uid}}</h2>
  <button
    (click)="logout()"
  >Logout</button>


<ng-template #showLogin>
  <h3>Plese login</h3>
  
  <label for="username">Username: </label>
  <input type="text" [(ngModel)]="username">
  <br>
  <label for="password">Password: </label>
  <input type="password" name="password" [(ngModel)]="password">

  <br>
  <br>
  <button (click)="login()">Login</button>
</ng-template>
</div>
```