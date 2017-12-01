import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomMate } from './roommate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  roommates: RoomMate[] = [];
  tempRoommateId: RoomMate[] = [];
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
    this.rm1.trend = 0;

    this.rm2 = new RoomMate();
    this.rm2.name = 'Olivia';
    this.rm2.powerusage = 32286;
    this.rm2.trend = 0;

    this.rm3 = new RoomMate();
    this.rm3.name = 'Kim';
    this.rm3.powerusage = 31348;
    this.rm3.current = true;
    this.rm3.trend = 0;

    this.roommates.push(this.rm1, this.rm2, this.rm3);
    this.updateRoomMateIdArray();
  }

  ngAfterViewInit() {
    setInterval(()=>{
      let val: number = Math.sin(this.currentMillis / (this.per2 * 2* Math.PI) + Math.PI/2);
      //this.rm2.powerusage += (this.currentMillis % 400)? Math.abs(Math.round(val)) : 0;
      val = Math.sin(this.currentMillis / (this.per1 * 2* Math.PI) );
      this.rm1.powerusage += (Math.round(val)>0)? 1 : 0;
      this.rm3.powerusage += (this.currentMillis % 1000==0)? 1:0;
      if(this.currentMillis%10000==0) {
        this.roommates.forEach(rm =>{
          if(rm.change) {
            rm.trend = 0;
            rm.change = false;
          }
        });
      }
      this.currentMillis += 200;
        this.updateSorting();
        this.updateRoomMateIdArray();
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
    let index = 0;
    this.roommates.forEach(rm => {
      rm.rank = index++;
    });
  }

  updateRoomMateIdArray() {
    let i1 = 0, i2 = 0;
    for(i1=0; i1< this.roommates.length; i1++) {
      let rm1 = this.roommates[i1];
      for(i2=0; i2< this.tempRoommateId.length; i2++) {
        let rm2 = this.tempRoommateId[i2];
        if(rm1.name==rm2.name && !rm1.change) {
          let trend = rm1.trend;
          if(rm1.rank> rm2.rank) {
            rm1.trend = -1;
          } else if(rm1.rank == rm2.rank) {
            rm1.trend = 0;
          } else {
            rm1.trend = 1;
          }
          if(trend!=rm1.trend) {
            rm1.change = true;
          }
        }
      }
    }
    this.tempRoommateId = JSON.parse(JSON.stringify(this.roommates));
    
    
  }

}
