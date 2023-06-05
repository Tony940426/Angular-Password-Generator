import { Component } from '@angular/core';

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
    this.password = 'MY PASSWORD!!!';
    console.log(`About to generate a password with the following:
    Include letters: ${this.includeLetters}
    Include letters: ${this.includeNumbers}
    Include letters: ${this.includeSymbols}
    The password will be ${this.passwordLength} long.
    `);
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

  lengthOfPassword(value: string){
    this.passwordLength = parseInt(value);
  }
}
