import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shift-list',
  imports: [DatePipe,MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './shift-list.html',
  styleUrl: './shift-list.scss'
})
export class ShiftList {

  constructor(private router: Router){

  }
  options: any[] = [
    {value: 'today', key: 'Today'},
    {value: 'week', key: 'This Week'},
  ];
  shifts: any = [{
    type: 'morning',
    date: new Date(),
    assigned: 10,
    capacity: 30
  }]

  navigateToDetails(): any{
    console.log("navigate")
    this.router.navigateByUrl('/shift-details');
  }

}
