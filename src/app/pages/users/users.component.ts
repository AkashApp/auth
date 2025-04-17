import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/api/common.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];

  constructor( private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getAllUsers().subscribe(res => {
      const clonedUsers = structuredClone(res.users);
      this.users = clonedUsers;
      this.filteredUsers = clonedUsers;
      console.log(this.users);
      console.log(this.filteredUsers);
    });
  }

  search(input: any) {
    let term = input.target.value;
    if (typeof term === 'string') {
      this.filteredUsers = this.users.filter(user =>
        user.firstName.toLowerCase().includes(term.toLowerCase()) ||
        user.lastName.toLowerCase().includes(term.toLowerCase())
      );
    }
    else{
      alert("enter the value into searchbar");
    }
  }
}
