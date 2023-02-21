import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showData(){
    axios.get('https://localhost:7092/api/UserFile').then((data)=>)
  }
}
