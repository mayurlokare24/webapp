import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDomainComponent } from './product-domain.component';

describe('ProductDomainComponent', () => {
  let component: ProductDomainComponent;
  let fixture: ComponentFixture<ProductDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
