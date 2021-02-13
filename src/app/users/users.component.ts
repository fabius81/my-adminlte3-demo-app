import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    new  User('fabio', 'fabio@fabio.it'),
    new  User('fabio2', 'fabio2@fabio.it'),
    new  User('fabio3', 'fabio3@fabio.it'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
