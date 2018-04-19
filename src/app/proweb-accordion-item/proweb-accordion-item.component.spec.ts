import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProwebAccordionItemComponent } from './proweb-accordion-item.component';

describe('ProwebAccordionItemComponent', () => {
  let component: ProwebAccordionItemComponent;
  let fixture: ComponentFixture<ProwebAccordionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProwebAccordionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProwebAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
