import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTemplateNameComponent } from './report-template-name.component';

describe('ReportTemplateNameComponent', () => {
  let component: ReportTemplateNameComponent;
  let fixture: ComponentFixture<ReportTemplateNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportTemplateNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTemplateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
