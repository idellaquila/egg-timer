import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureBarComponent } from './temperature-bar.component';

describe('TemperatureBarComponent', () => {
  let component: TemperatureBarComponent;
  let fixture: ComponentFixture<TemperatureBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
