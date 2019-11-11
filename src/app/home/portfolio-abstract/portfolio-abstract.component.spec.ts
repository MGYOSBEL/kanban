import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAbstractComponent } from './portfolio-abstract.component';

describe('PortfolioAbstractComponent', () => {
  let component: PortfolioAbstractComponent;
  let fixture: ComponentFixture<PortfolioAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
