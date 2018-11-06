import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFerramentasComponent } from './lista-ferramentas.component';

describe('ListaFerramentasComponent', () => {
  let component: ListaFerramentasComponent;
  let fixture: ComponentFixture<ListaFerramentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFerramentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFerramentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
