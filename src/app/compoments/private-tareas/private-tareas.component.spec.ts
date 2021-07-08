import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTareasComponent } from './private-tareas.component';

describe('PrivateTareasComponent', () => {
  let component: PrivateTareasComponent;
  let fixture: ComponentFixture<PrivateTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
