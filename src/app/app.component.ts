import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test-1';
  currentStep = 1;
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      panNumber: ['', Validators.required],
      employmentType: ['Salaried', Validators.required],
      monthlySalary: ['', Validators.required],
      pinCode: ['', Validators.required],
      city: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue],
      dataSharing: [false, Validators.requiredTrue]
    });
  }

  onContinue() {
    if (this.loanForm.valid) {
      console.log(this.loanForm.value);
    }
  }

  isStepActive(step: number): boolean {
    return step === this.currentStep;
  }

  isStepCompleted(step: number): boolean {
    return step < this.currentStep;
  }
}
