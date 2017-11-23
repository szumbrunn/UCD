import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

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

  }


  login() {
      if(this.loginCredentials.email==this.dummyCredentials.email &&
        this.loginCredentials.password==this.dummyCredentials.password) {
            this.error = false;
            this.navCtrl.setRoot(HomePage);
        } else {
            this.error = true;
        }
  }

  signup() {

  }

}
