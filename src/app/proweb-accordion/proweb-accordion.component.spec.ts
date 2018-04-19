import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProwebAccordionComponent } from './proweb-accordion.component';

describe('ProwebAccordionComponent', () => {
  let component: ProwebAccordionComponent;
  let fixture: ComponentFixture<ProwebAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProwebAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProwebAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
