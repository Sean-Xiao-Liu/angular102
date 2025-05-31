import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { Result } from './result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent]
})
export class AppComponent {
  showResults = false;
  results: Result[] = [];

  onShowResults(showResults: boolean) {
    this.showResults = showResults;
  }

  onResults(results: Result[]) {
    this.results = results;
    console.log("results received");
    console.log(this.results);
  }
}
