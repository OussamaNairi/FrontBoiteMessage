import { Component, OnInit, Input } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';

import { LocalStorageService,LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  response:any = { "token":""}

  @LocalStorage()   userconnect:any;

  constructor(private ser:GestionService, private route:Router, private local:LocalStorageService) { }

  ngOnInit(): void {

    
  }

  verification(request){
    this.ser.login(request).subscribe(
      data=>{
            this.response=data.body;
            let token=this.response.token;
            localStorage.setItem("token",token)
            this.ser.saveToken(token);
            this.route.navigate(['/listerecus'])
      },
      err=> {

      }
    )

  }

}