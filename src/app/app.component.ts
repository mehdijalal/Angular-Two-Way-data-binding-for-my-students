import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  title = 'DomP1';
  vInches;
  vCM;
  vD: number = 34;

  toDecimal(fs: string) {

    if (fs.includes("/")) {
      //var MJdecimal = eval(fs);
      console.log('---Fraction number exists----');
      this.vCM = eval(fs) * 2.54;
    } else {
      console.log('---does not exist fraction---');
      this.vCM = eval(fs) * 2.54;
    }
  }

  toDecimalCM(fs: string) {

    if (fs.includes("/")) {
      //var MJdecimal = eval(fs);
      console.log('---Fraction number exists----');
      this.vInches = eval(fs) / 2.54;
    } else {
      console.log('---does not exist fraction---');
      this.vInches = eval(fs) / 2.54;
    }
  }
}
