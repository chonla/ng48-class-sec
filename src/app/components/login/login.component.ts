import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenService } from '../../services/authen.service';
import { Token } from '../../models/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private builder: FormBuilder,
    private authen: AuthenService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      login: '',
      password: ''
    });
  }

  login() {
    this.authen.login(this.loginForm.value).subscribe((resp: Token) => {
      this.authen.setToken(resp.token);
      this.router.navigate(['/dashboard']);
    });
  }

}
