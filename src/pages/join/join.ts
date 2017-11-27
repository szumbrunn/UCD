import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-join',
  templateUrl: 'join.html'
})
export class JoinPage {

  staticKey = 'a8mn3';

  showkey = true;
  ap = { key: '', name:'', street:'', place: ''};

  constructor(public navCtrl: NavController) {

  }

  join() {
    if(this.ap.key==this.staticKey) {
      this.ap.name = 'Our Cool Apartment';
      this.ap.street = 'First Road';
      this.ap.place = 'Arlington';
      localStorage.setItem('flat', JSON.stringify(this.ap));
      this.navCtrl.setRoot(HomePage);
    }
  }

  create() {
    localStorage.setItem('flat', JSON.stringify(this.ap));
    this.navCtrl.setRoot(HomePage);
  }


  

}
