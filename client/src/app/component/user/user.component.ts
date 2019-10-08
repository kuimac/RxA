import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  getUser(): void {
    this.userService.getUser()
      .subscribe((users) => {
        this.users = users;
      });
  }

  ngOnInit() {
    this.getUser();
  }
}
