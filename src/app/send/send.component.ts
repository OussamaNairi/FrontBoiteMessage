import { Component, OnInit } from '@angular/core';
import { LocalStorageService,LocalStorage } from 'ngx-webstorage';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  messages:any=[];

  @LocalStorage() userconnect:any;

  constructor(private ser:GestionService, private route:Router, private local:LocalStorageService) { }

  ngOnInit(): void {
    this.ser.getALlMessagesEnvoyes(this.userconnect.id).subscribe(
        data=>{
              this.messages=data;
        },
        err=>{
        }
    )
  }


  supp(id:number){
    this.ser.deleteMessage(id).subscribe(
      data=> { this.ngOnInit()  },
      err => {  }
    )
  }

  deconnexion(){
      this.local.clear("userconnect");

  }

}