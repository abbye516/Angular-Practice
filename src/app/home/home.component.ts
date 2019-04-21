import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;
//allows us to access methods from our data service (dependency injection)
  constructor(private data: DataService) { }
//an angular lifecycle hook, anything that goes here will load when component loads, like componentdidmount
  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users = data
      console.log(this.users)
    })
  }


}
