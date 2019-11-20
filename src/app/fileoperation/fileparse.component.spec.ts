import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FffComponent } from './fff.component';

describe('FffComponent', () => {
  let component: FffComponent;
  let fixture: ComponentFixture<FffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
