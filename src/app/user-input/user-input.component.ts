import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentResults } from './user-input.service';
import { Result } from '../result.model';
import { UserInput } from './user-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() showResults = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<Result[]>();

  // use signal to pass data
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('0');
  investmentDuration = signal('0');

  get userInput(): UserInput {
    return {
      initialInvestment: Number(this.initialInvestment()),
      annualInvestment: Number(this.annualInvestment()),
      expectedReturn: Number(this.expectedReturn()),
      duration: Number(this.investmentDuration()),
    };
  }

  onReset() {
    console.log("resetting the form");
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('0');
    this.investmentDuration.set('0');
    this.showResults.emit(false);
  }

  onCalculate() {
    console.log("calculating the form");
    this.showResults.emit(true);
    this.results.emit(calculateInvestmentResults(this.userInput));
    console.log("results emitted");
  }
}

