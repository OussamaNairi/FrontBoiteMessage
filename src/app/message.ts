import { User } from './user';

export class Message{
    public id:number;
    public sujet:string;
    public contenu:string;
    public usersend:User;
    public userreceive:User;

    constructor(){

    }
    public set $usersend(x:User){
        this.usersend=x;
    }

}