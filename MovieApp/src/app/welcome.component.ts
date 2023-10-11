import { Component, computed, signal, effect, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
  ]
})
export class WelcomeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form!: FormGroup;

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
  ngOnInit() {
    // https://stackoverflow.com/questions/70106472/property-fname-comes-from-an-index-signature-so-it-must-be-accessed-with-fn
    this.form = this.fb.group({
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required]
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.firstName = this.form.value.firstName;
      this.lastName = this.form.value.lastName;
      console.log('Form is Submitted!', this.form.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
