import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicIndexComponentComponent } from './dynamic-index-component.component';

describe('DynamicIndexComponentComponent', () => {
  let component: DynamicIndexComponentComponent;
  let fixture: ComponentFixture<DynamicIndexComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicIndexComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicIndexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
