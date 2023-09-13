import { Component, OnInit } from '@angular/core';
import User from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  getUsers:any=[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.getUsers=users;
    })
  }

}
