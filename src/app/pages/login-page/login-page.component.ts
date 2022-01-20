import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  username: string
  ngOnInit(): void {
  }

 async onSignUp(){
  await this.userService.signUp(this.username)
  this.router.navigateByUrl('home')

  }
}
