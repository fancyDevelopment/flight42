import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportLossSummaryComponent } from './report-loss-summary.component';

describe('ReportLossSummaryComponent', () => {
  let component: ReportLossSummaryComponent;
  let fixture: ComponentFixture<ReportLossSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportLossSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportLossSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
