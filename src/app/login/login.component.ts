import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  name:any=''
  password:any=''


  constructor( private route:Router) { }

  ngOnInit(): void {

  }

  LoginTo() {
   
     if(this.name="admin" && this.password=="admin"){
      this.route.navigateByUrl('userlist')
     }
     else{
      alert('invalid')
     }

  }





}
