import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  selectedOption = 'Login';

  updateSelectedOption(option: string) {
    this.selectedOption = option;
  }
}
