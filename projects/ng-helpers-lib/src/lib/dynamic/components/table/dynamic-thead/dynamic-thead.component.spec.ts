import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTheadComponent } from './dynamic-thead.component';

describe('DynamicTheadComponent', () => {
  let component: DynamicTheadComponent;
  let fixture: ComponentFixture<DynamicTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
