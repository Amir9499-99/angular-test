import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDepositsComponent } from './recent-deposits.component';

describe('RecentDepositsComponent', () => {
  let component: RecentDepositsComponent;
  let fixture: ComponentFixture<RecentDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
