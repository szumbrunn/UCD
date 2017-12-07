import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

    experiment:boolean = false;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let exp = localStorage.getItem("experiment");
   
    if(exp!="undefined" && exp!=undefined && exp) {
      this.experiment = JSON.parse(exp);
    }
  }

  ngAfterViewInit() {
    
 }

  changeExp() {
    localStorage.setItem("experiment", JSON.stringify(this.experiment));
    console.log(this.experiment);
  }

}
