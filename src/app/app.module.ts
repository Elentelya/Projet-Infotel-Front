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
import { AdminComponent } from './admin/admin.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { LocalStorageService } from 'ngx-webstorage';
// import { SearchBookAdminComponent } from './search-book-admin/search-book-admin.component';


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
    AccountComponent,
    AdminComponent,
    SearchBarComponent,
    UserInfosComponent,
    // SearchBookAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessagesService, BackEndService, DatashareService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
