import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QRCodeComponent} from 'angular2-qrcode';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  user = {email: '', firstname: '', password:''};
  flat = {name:'',street:'',place:'',key:''};

  constructor(public navCtrl: NavController) {
    let flatObj = JSON.parse(localStorage.getItem('flat'));
    if(flatObj!=null) {
      this.flat.key = flatObj['key'];
      this.flat.name = flatObj['name'];
      this.flat.street = flatObj['street'];
      this.flat.place = flatObj['place'];
    }
    let loginObj = JSON.parse(localStorage.getItem("login"));
    if(loginObj!=null) {
      this.user.email = loginObj['email'];
      this.user.password = loginObj['password'];
      this.user.firstname = loginObj['firstname'];
    }
  }

  ngAfterViewInit() {
    
 }

  showQR() {

  }

}
