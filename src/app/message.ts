import { User } from './user';

export class Message{
    private id:number;
    private sujet:string;
    private contenu:string;
    private usersend:User;
    private userreceive:User;

    constructor(){

    }
    public set $usersend(x:User){
        this.usersend=x;
    }

}