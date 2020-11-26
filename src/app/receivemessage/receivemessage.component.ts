import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receivemessage',
  templateUrl: './receivemessage.component.html',
  styleUrls: ['./receivemessage.component.css']
})
export class ReceivemessageComponent implements OnInit {

  messages:any=[];

  @LocalStorage() userconnect:any;
 
  constructor(private ser:GestionService, private route:Router, private local:LocalStorageService) { }

  ngOnInit(): void {
    this.ser.getALlMessagesRecus(this.userconnect.id).subscribe(
        data=>{
          console.log(this.userconnect.id)
            this.messages=data;
            console.log(this.messages)
        },
        errr =>{

        }
    )

  }


  supp(id:number){
    this.ser.deleteMessage(id).subscribe(
      data=>{
        this.ngOnInit();
      },
      err=>{
       
       }
    )
  }

  deconnexion(){
      this.local.clear("userconnect");
  }



}