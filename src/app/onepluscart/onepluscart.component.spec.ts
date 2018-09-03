import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepluscartComponent } from './onepluscart.component';

describe('OnepluscartComponent', () => {
  let component: OnepluscartComponent;
  let fixture: ComponentFixture<OnepluscartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepluscartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepluscartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
