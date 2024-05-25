import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoListComponent } from './organismo-list.component';

describe('OrganismoListComponent', () => {
  let component: OrganismoListComponent;
  let fixture: ComponentFixture<OrganismoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganismoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganismoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
