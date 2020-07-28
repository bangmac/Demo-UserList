import { Component, OnInit } from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  title_page = 'Users'
  users: IUser[] ;

  setUserList(){
    let userList = [
      {
        id: 1,
        name: 'nam',
        email: 'nam@gamil.com'
      },
      {
        id: 2,
        name: 'vinh',
        email: 'vinh@gamil.com'
      },
      {
        id: 3,
        name: 'duc',
        email: 'duc@gamil.com'
      }
    ]
    return userList;
    // this.users = userList;
  }

  userFilter = [];

  constructor() {
  }

  ngOnInit(): void {
    this.users = this.setUserList();
  }

  search(event) {
    let keyword = event.target.value;
    this.users = (keyword) ? this.filerByKeyword(keyword) : this.setUserList();
  }

  filerByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) != -1;
    })
  }

  deleteUser(id : number){
    let delUser = [];
    this.users.map(user =>{
      if (user.id != id){
        delUser.push(user)
      }
    });
    this.users = delUser;
  }
}


