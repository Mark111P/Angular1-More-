import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularItemsComponent } from './angular-items.component';

describe('AngularItemsComponent', () => {
  let component: AngularItemsComponent;
  let fixture: ComponentFixture<AngularItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
