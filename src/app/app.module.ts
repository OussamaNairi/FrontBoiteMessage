import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SendmessagesComponent } from './sendmessages/sendmessages.component';
import { ReceivemessageComponent } from './receivemessage/receivemessage.component';
import { SendComponent } from './send/send.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionService } from './gestion.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SendmessagesComponent,
    ReceivemessageComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
