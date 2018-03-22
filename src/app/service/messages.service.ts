import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

alertClass = "";
isDisplayed = true;
message = "truc";

  constructor() { }

  displayErrorMessage(message: string){
    this.message = message;
    this.alertClass = "alert alert-danger"
  }

  displaySuccessfullMessage(message: string){
    this.message = message;
    this.alertClass = "alert alert-info"
  }

  displayWarningMessage(message: string){
    this.message = message;
    this.alertClass = "alert alert-warning"
  }

}
