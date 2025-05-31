import { Component, Input, input } from '@angular/core';
import { Result } from '../result.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investments-result',
  standalone: true,
  templateUrl: './investments-result.component.html',
  styleUrl: './investments-result.component.css',
  imports: [CommonModule]
})
export class InvestmentsResultComponent {
  // @Input() results: Result[] = [];
  // use signal to pass data instead of @Input
  results = input.required<Result[]>();
}
