import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class GestionService {

  username:string;
  token:string;

  @LocalStorage() userconnect;

  constructor(private http:HttpClient) { }

  getUserByUserName(username:string){
    let hs=new HttpHeaders({"Authorization":localStorage.getItem("token")})
    return this.http.get("http://127.0.0.1:8080/rest/user/"+username, {headers:hs})
  }

  getALlMessagesRecus(id:number){
    let hs=new HttpHeaders({"Authorization":localStorage.getItem("token")})
    return this.http.get("http://127.0.0.1:8080/rest/messagesrecus/"+id, {headers:hs})
  }
  getALlMessagesEnvoyes(id:number){
    let hs=new HttpHeaders({"Authorization":localStorage.getItem("token")})
    return this.http.get("http://127.0.0.1:8080/rest/messagesenvoyes/"+id, {headers:hs})
  }
  getUserById(id:number){
    
    return this.http.get("http://127.0.0.1:8080/rest/user/"+id)
  }
  verif(username:string, password:string){
    return this.http.get("http://127.0.0.1:8080/rest/verif/"+username+"/"+password)
  }
  getUsers(){
    return this.http.get("http://127.0.0.1:8080/rest/users");
  }
  sendMessage(message : any){
    let hs=new HttpHeaders({"Authorization":localStorage.getItem("token")})
    return this.http.post("http://127.0.0.1:8080/rest/addMessage",message, {headers:hs})
  }
  deleteMessage(id:number){
    let hs=new HttpHeaders({"Authorization":localStorage.getItem("token")})
    return this.http.delete("http://127.0.0.1:8080/rest/deleteMessage/"+id, {headers:hs})
  }


  login(request){
    return this.http.post("http://127.0.0.1:8080/auth/login",request,{observe:'response'})
  }

  saveToken(token){
    let helper=new JwtHelperService();
    this.token=token;
    let dec=helper.decodeToken(token);
    console.log(dec);

    this.username=dec.sub;

    this.getUserByUserName(this.username).subscribe(
      data=> { this.userconnect=data},
      err=>{}
    )
  }

}