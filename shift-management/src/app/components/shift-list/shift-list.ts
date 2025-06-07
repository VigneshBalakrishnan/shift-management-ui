import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shift-list',
  imports: [DatePipe],
  templateUrl: './shift-list.html',
  styleUrl: './shift-list.scss'
})
export class ShiftList {
  shifts: any = [{
    type: 'morning',
    date: new Date(),
    assigned: 10,
    capacity: 30
  }]

}
