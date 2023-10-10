import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
  ]
})
export class WelcomeComponent {
  startColor = "Orange";

  firstNameSignal = signal("");
  get firstName(): string { return this.firstNameSignal(); }
  set firstName(value: string) { this.firstNameSignal.set(value); }

  lastNameSignal = signal("");
  get lastName(): string { return this.lastNameSignal(); }
  set lastName(value: string) { this.lastNameSignal.set(value); }

  fullName = computed(() => `${this.firstNameSignal()} ${this.lastNameSignal()}`);

  // Compiliert nicht
  // effect(()=> {
  //   console.log(fullName());
  // });


  ledChanged(newcolor: string) {
    console.log(`Changed to ${newcolor}`);
  }
}
