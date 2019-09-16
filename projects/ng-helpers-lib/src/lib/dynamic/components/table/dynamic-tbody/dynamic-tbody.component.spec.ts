import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTbodyComponent } from './dynamic-tbody.component';

describe('DynamicTbodyComponent', () => {
  let component: DynamicTbodyComponent;
  let fixture: ComponentFixture<DynamicTbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
