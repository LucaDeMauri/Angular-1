import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercizioSommaComponent } from './esercizio-somma.component';

describe('EsercizioSommaComponent', () => {
  let component: EsercizioSommaComponent;
  let fixture: ComponentFixture<EsercizioSommaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsercizioSommaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsercizioSommaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
