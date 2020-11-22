import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }

  getAllMessagesRecus(id:number){
    return this.http.get("http://127.0.0.1:8080/rest/messagesrecus/"+id)
  }
  getAllMessagesEnvoyes(id:number){
    return this.http.get("http://127.0.0.1:8080/rest/messagesenvoyes/"+id)
  }
  getUserById(id:number){
    return this.http.get("http://127.0.0.1:8080/rest/user/"+id)
  }
  verif(username:string,password:string){
    return this.http.get("http://127.0.0.1:8080/rest/verif/"+username+"/"+password)
  }
  getUsers(){
    return this.http.get("http://127.0.0.1:8080/rest/users/")
  }
  sendMessage(message : any){
    return this.http.post("http://127.0.0.1:8080/rest/addMessage/",message)
  }
  deleteMessage(id:number){
    return this.http.delete("http://127.0.0.1:8080/rest/deleteMessage/"+id)
  }
}
