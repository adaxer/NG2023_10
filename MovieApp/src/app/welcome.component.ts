import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
  ]
})
export class WelcomeComponent {
  startColor = "Orange";
  firstName=signal("");
  lastName=signal("");
  fullName=computed(()=> `${this.firstName} ${this.lastName}`);
  
  ledChanged(newcolor: string) {
    console.log(`Changed to ${newcolor}`);
  }
}
