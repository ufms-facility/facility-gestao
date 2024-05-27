import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoDetailComponent } from './organismo-detail.component';

describe('OrganismoDetailComponent', () => {
  let component: OrganismoDetailComponent;
  let fixture: ComponentFixture<OrganismoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganismoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganismoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
