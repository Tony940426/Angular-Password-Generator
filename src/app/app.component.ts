import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  passwordLength = 0;

  onButtonClick(){
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()_+'
    let validChars = '';

    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbers
    }
    if(this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onResetClick() {
    this.password = "";
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  lengthOfPassword(value: any){
    const parsedValue = parseInt(value.target.value);
    this.passwordLength = parsedValue;

    if (!isNaN (parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }
}
