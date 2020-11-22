import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'ngx-webstorage';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:string="";
  login:string="";
  users:any=[]

  @LocalStorage() userconnect:any;
  constructor(private ser:GestionService,private route:Router) { }

  ngOnInit(): void {
  }
  verification(){
    this.ser.verif(this.login,this.pass).subscribe(

      data=> {
        this.users=data;
        if(this.users.length >0){
          this.userconnect=this.users[0];
        this.route.navigate(["/listerecus"]);
        }
      },
      err=> {
        console.log(err)
      }
    )
  }

}
