import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Almacenamiento } from './almacenamiento';

describe('Almacenamiento', () => {
  let component: Almacenamiento;
  let fixture: ComponentFixture<Almacenamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Almacenamiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Almacenamiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
