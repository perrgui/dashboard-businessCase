import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesGroupComponent } from './donnees-group.component';

describe('DonneesGroupComponent', () => {
  let component: DonneesGroupComponent;
  let fixture: ComponentFixture<DonneesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
