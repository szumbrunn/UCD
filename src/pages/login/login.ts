import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { JoinPage } from '../join/join';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

showlogin = true;
createSuccess = false;
error = false;
loginCredentials = { email: '', password: '', firstname: '' };
dummyCredentials = { email: 'ucd', password: '123' };

  constructor(public navCtrl: NavController) {

    let loginObj = JSON.parse(localStorage.getItem("login"));
    if(loginObj!=null) {
      this.loginCredentials.email = loginObj['email'];
      this.loginCredentials.password = loginObj['password'];
      this.login();
      this.clearLoginCredentials();
    }
  }


  login() {
    if(this.loginCredentials.email==this.dummyCredentials.email &&
      this.loginCredentials.password==this.dummyCredentials.password) {
      this.error = false;
      localStorage.setItem("login", JSON.stringify(this.loginCredentials));
      if(localStorage.getItem('flat')!=null) {
        this.navCtrl.setRoot(HomePage);
      } else {
        this.navCtrl.setRoot(JoinPage);
      }
    } else {
        this.error = true;
    }
  }

  clearLoginCredentials(): void {
    this.loginCredentials = { email: '', password: '', firstname: '' };
  }

  signup() {

  }

}
