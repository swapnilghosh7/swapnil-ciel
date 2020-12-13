import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private http: HttpClient) { }
  
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(userlogin){
    // event.preventDefault();
    console.log(userlogin.username);
    const headers = { 'Access-Control-Allow-Origin': '*'  };
    this.http.post('http://localhost:81/public/Login',{username:'swapnil',password: '123456'}, {headers}).subscribe((data)=>console.log(data))
  }

}
