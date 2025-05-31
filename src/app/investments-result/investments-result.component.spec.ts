import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsResultComponent } from './investments-result.component';

describe('InvestmentsResultComponent', () => {
  let component: InvestmentsResultComponent;
  let fixture: ComponentFixture<InvestmentsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
