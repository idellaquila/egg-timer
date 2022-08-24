import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggSizeComponent } from './egg-size.component';

describe('EggSizeComponent', () => {
  let component: EggSizeComponent;
  let fixture: ComponentFixture<EggSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EggSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EggSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
