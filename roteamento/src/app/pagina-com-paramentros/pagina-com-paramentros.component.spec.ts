import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComParamentrosComponent } from './pagina-com-paramentros.component';

describe('PaginaComParamentrosComponent', () => {
  let component: PaginaComParamentrosComponent;
  let fixture: ComponentFixture<PaginaComParamentrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaComParamentrosComponent]
    });
    fixture = TestBed.createComponent(PaginaComParamentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
