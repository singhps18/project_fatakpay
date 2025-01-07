import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerxjsComponent } from './customerxjs.component';

describe('CustomerxjsComponent', () => {
  let component: CustomerxjsComponent;
  let fixture: ComponentFixture<CustomerxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
