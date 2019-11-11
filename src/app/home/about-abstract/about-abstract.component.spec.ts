import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAbstractComponent } from './about-abstract.component';

describe('AboutAbstractComponent', () => {
  let component: AboutAbstractComponent;
  let fixture: ComponentFixture<AboutAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
