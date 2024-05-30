import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeptideoCreateComponent } from './peptideo-create.component';

describe('PeptideoCreateComponent', () => {
  let component: PeptideoCreateComponent;
  let fixture: ComponentFixture<PeptideoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeptideoCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeptideoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
