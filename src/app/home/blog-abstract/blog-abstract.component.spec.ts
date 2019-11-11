import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAbstractComponent } from './blog-abstract.component';

describe('BlogAbstractComponent', () => {
  let component: BlogAbstractComponent;
  let fixture: ComponentFixture<BlogAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
