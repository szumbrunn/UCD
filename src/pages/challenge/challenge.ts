import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-challenge',
  templateUrl: 'challenge.html'
})
export class ChallengePage {

    exp:boolean = false;

  constructor(public navCtrl: NavController) {
    let experiment = localStorage.getItem("experiment");
    if(experiment!=undefined && experiment!="undefined" && experiment) {
        this.exp = JSON.parse(experiment);
    }
  }

  ngAfterViewInit() {
    
 }

  showQR() {

  }

}
