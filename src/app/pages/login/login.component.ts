import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonService) {}
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid){
      this.commonService.login(this.loginForm.value.username!, this.loginForm.value.password!).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert('Login failed. Please check your credentials and try again.');
        }
      });
    }
  }
}
