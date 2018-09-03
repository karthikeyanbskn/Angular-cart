import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PococartComponent } from './pococart.component';

describe('PococartComponent', () => {
  let component: PococartComponent;
  let fixture: ComponentFixture<PococartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PococartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PococartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
