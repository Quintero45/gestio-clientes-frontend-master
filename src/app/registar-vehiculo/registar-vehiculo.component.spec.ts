import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistarVehiculoComponent } from './registar-vehiculo.component';



describe('RegistarVehiculoComponent', () => {
  let component: RegistarVehiculoComponent;
  let fixture: ComponentFixture<RegistarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
