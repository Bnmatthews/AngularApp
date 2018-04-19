import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhibliSearchComponent } from './ghibli-search.component';

describe('GhibliSearchComponent', () => {
  let component: GhibliSearchComponent;
  let fixture: ComponentFixture<GhibliSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhibliSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhibliSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
