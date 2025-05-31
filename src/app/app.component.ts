import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { Result } from './result.model';
import { InvestmentsResultComponent } from './investments-result/investments-result.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentsResultComponent]
})
export class AppComponent {
  showResults = false;
    results = signal<Result[]>([]);

  onShowResults(showResults: boolean) {
    this.showResults = showResults;
  }

  onResults(results: Result[]) {
    // need to use set to update the signal
    this.results.set(results);
    console.log("results received");
  }
}
