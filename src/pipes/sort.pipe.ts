import {Pipe, PipeTransform} from '@angular/core';
import { RoomMate } from '../pages/home/roommate';

@Pipe({
    name: "sortRoommates"
  })
  export class RoommatesSortPipe implements PipeTransform {
    transform(array: RoomMate[], args: any): RoomMate[] {
      if (array == null) {
        return null;
      }
      
      array.sort((a, b) => {
        if (a.powerusage < b.powerusage) {
            return 1;
          } else if (a.powerusage > b.powerusage) {
            return -1;
          } else {
            return 0;
          }
      });
      return array;
    }
  }