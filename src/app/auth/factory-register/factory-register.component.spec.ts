import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryRegisterComponent } from './factory-register.component';

describe('FactoryRegisterComponent', () => {
  let component: FactoryRegisterComponent;
  let fixture: ComponentFixture<FactoryRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactoryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
