import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesService } from './service/messages.service';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { CategoryComponent } from './category/category.component';
import { ListbookComponent } from './listbook/listbook.component';
import { ListmemberComponent } from './listmember/listmember.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BackEndService } from './service/back-end.service';
import { DatashareService } from './service/datashare.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PagenotfoundComponent,
    LoginComponent,
    AccueilComponent,
    AddBookComponent,
    BooksComponent,
    CategoryComponent,
    ListbookComponent,
    ListmemberComponent,
    RegisterComponent,
    WelcomeComponent,
    MessagesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessagesService, BackEndService, DatashareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
