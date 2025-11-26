import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoProveedores } from './estado-proveedores';

describe('EstadoProveedores', () => {
  let component: EstadoProveedores;
  let fixture: ComponentFixture<EstadoProveedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoProveedores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoProveedores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
