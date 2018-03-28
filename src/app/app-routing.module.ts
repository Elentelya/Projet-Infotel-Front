import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { ListbookComponent } from './listbook/listbook.component';
import { ListmemberComponent } from './listmember/listmember.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { MessagesComponent } from './messages/messages.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { UserInfosComponent } from './user-infos/user-infos.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent },
 { path: 'category', component: CategoryComponent },
 { path: 'listBook', component: ListbookComponent },
 { path: 'listMember', component: ListmemberComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'welcome', component: WelcomeComponent },
 { path: 'accueil', component: AccueilComponent },
 { path: 'component', component: AddBookComponent },
 { path: 'books', component: BooksComponent },
 { path: 'account', component: AccountComponent },
 { path: 'messages', component: MessagesComponent },
 { path: 'admin', component: AdminComponent },
 { path: 'user-infos', component: UserInfosComponent },
 { path: '**', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
