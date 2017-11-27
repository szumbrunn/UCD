import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomMate } from './roommate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  roommates: RoomMate[] = [];
  rm1: RoomMate;
  rm2: RoomMate;
  rm3: RoomMate;

  per1: number = 2000;
  per2: number = 5000;
  currentMillis: number = 0;

  constructor(public navCtrl: NavController) {

    this.rm1 = new RoomMate();
    this.rm1.name = 'John';
    this.rm1.powerusage = 32244;

    this.rm2 = new RoomMate();
    this.rm2.name = 'Olivia';
    this.rm2.powerusage = 32286;

    this.rm3 = new RoomMate();
    this.rm3.name = 'Kim';
    this.rm3.powerusage = 31348;
    this.rm3.current = true;

    this.roommates.push(this.rm1, this.rm2, this.rm3);
  }

  ngAfterViewInit() {
    setInterval(()=>{
      let val: number = Math.sin(this.currentMillis / (this.per2 * 2* Math.PI) + Math.PI/2);
      this.rm2.powerusage += (this.currentMillis % 400)? Math.abs(Math.round(val)) : 0;
      val = Math.sin(this.currentMillis / (this.per1 * 2* Math.PI) );
      this.rm1.powerusage += (Math.round(val)>0)? 1 : 0;
      this.rm3.powerusage += (this.currentMillis % 1000==0)? 1:0;
      this.currentMillis += 200;
        this.updateSorting();
    }, 200);
  }

  updateSorting() {
    this.roommates.sort((a,b)=> {
      if (a.powerusage < b.powerusage) {
        return 1;
      } else if (a.powerusage > b.powerusage) {
        return -1;
      } else {
        return 0;
      }
    });
  }

}
