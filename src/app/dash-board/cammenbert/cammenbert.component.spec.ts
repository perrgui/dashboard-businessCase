import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CammenbertComponent } from './cammenbert.component';

describe('CammenbertComponent', () => {
  let component: CammenbertComponent;
  let fixture: ComponentFixture<CammenbertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CammenbertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CammenbertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
