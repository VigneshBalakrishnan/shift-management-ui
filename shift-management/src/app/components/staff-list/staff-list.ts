import { DatePipe } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({ providedIn: 'root' }) // Can be provided in the root or the component
export class MyService {
  constructor(private http: HttpClient) {}

  getData() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get('http://10.151.40.68:3000/staffList',{headers: headers});
  }
}

@Component({
  selector: 'app-staff-list',
  imports: [DatePipe,MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.scss'
})
export class StaffList implements OnInit {
    staffs: any = [{
    name: 'Praveen',
    email: 'praveen@example.com',
    role: 'Doctor',
    department: 'Surgen',
    gender:'Male',
    logged_in:'yes'
  }]
  constructor(private router: Router,private myservice: MyService){
    
  }

  ngOnInit(): void {
    this.myservice.getData().subscribe((response: any)=>{
      this.staffs = response;
      console.log(response);
      
    })
  }
  options: any[] = [
    {value: 'today', key: 'Today'},
    {value: 'week', key: 'This Week'},
  ];


  navigateToDetails(): any{
    console.log("navigate")
    this.router.navigateByUrl('/shift-details');
  }

}
