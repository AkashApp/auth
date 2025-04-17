import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: any;

  constructor( private router: Router, private commonService: CommonService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.commonService.getUserData().subscribe({
      next: data => this.user = data,
      error: () => this.router.navigate(['/login'])
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
