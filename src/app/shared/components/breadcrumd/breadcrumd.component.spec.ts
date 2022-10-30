import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumdComponent } from './breadcrumd.component';

describe('BreadcrumdComponent', () => {
  let component: BreadcrumdComponent;
  let fixture: ComponentFixture<BreadcrumdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
