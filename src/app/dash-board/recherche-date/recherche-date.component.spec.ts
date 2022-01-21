import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheDateComponent } from './recherche-date.component';

describe('RechercheDateComponent', () => {
  let component: RechercheDateComponent;
  let fixture: ComponentFixture<RechercheDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
