import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YService } from '../y.service';
import { Task } from '../model/task';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  details: any = []

  updated:any

  constructor(private Route: Router, private http: HttpClient, private service: YService) { }

  ngOnInit(): void {

    this.view()

  }



  add() {
    this.Route.navigateByUrl('userdetails/:id')
  }



  view() {
    this.service.Viewall().subscribe(res => {
      this.details = res
    })
  }



  deleteit(id:any) {
    this.service.Deleteit(id).subscribe(res => {
      alert('deleted')
      this.ngOnInit()
    })

  }
  

  edit(){

  }





}


