import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReceivemessageComponent } from './receivemessage/receivemessage.component';
import { SendComponent } from './send/send.component';
import { SendmessagesComponent } from './sendmessages/sendmessages.component';

const routes: Routes = [
 {path:"",component:LoginComponent},
 {path:"envoi",component:SendComponent},
 {path:"listeenvois",component:SendmessagesComponent},
 {path:"listerecus",component:ReceivemessageComponent},
 {path:"login",component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
