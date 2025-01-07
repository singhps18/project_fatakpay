import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableinfintyComponent } from './tableinfinty.component';

describe('TableinfintyComponent', () => {
  let component: TableinfintyComponent;
  let fixture: ComponentFixture<TableinfintyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableinfintyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableinfintyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
