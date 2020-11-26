import { Component, OnInit } from '@angular/core';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { Message } from '../message';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendmessages',
  templateUrl: './sendmessages.component.html',
  styleUrls: ['./sendmessages.component.css']
})
export class SendmessagesComponent implements OnInit {

  users:any=[];
  @LocalStorage() userconnect:any;

  message:Message= new Message();
  
  constructor(private ser:GestionService, private route:Router, private local:LocalStorageService) { }

  ngOnInit(): void {
    this.message.$usersend=this.userconnect;
    this.ser.getUsers().subscribe(
      data=> {this.users=data },
      err=>{ }
    )
  }

  send(){
    this.ser.sendMessage(this.message).subscribe(
        data=> { 
          
          this.route.navigate(['/listeenvois'])
         },
        err=> {  }
    )
  }

}