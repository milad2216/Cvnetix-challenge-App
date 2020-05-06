import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        AddToCartComponent
      ],
      imports: [
        NgbModule,
        FontAwesomeModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {
      name: "Men Leaf Print Pocket Front Hawaiian Shirt",
      price: 120,
      images: ["../../../assets/images/shirt1.webp","../../../assets/images/shirt2.webp","../../../assets/images/shirt3.webp","../../../assets/images/shirt4.webp"],
      sizes:["S", "M", "L", "XL", "XXL"]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
