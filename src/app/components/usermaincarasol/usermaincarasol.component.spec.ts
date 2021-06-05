import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermaincarasolComponent } from './usermaincarasol.component';

describe('UsermaincarasolComponent', () => {
  let component: UsermaincarasolComponent;
  let fixture: ComponentFixture<UsermaincarasolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermaincarasolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermaincarasolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
