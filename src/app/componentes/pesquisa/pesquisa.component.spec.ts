import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaComponent } from './pesquisa.component';

describe('PesquisarComponent', () => {
  let component: PesquisaComponent;
  let fixture: ComponentFixture<PesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
