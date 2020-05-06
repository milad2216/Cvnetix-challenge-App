import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartComponent } from './add-to-cart.component';
import { AppComponent } from 'src/app/app.component';
import { ProductListComponent } from 'src/app/view/product-list/product-list.component';
import { ProductComponent } from '../product/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductListComponent,
        AddToCartComponent,
        ProductComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        FontAwesomeModule
      ],
      providers: [ShoppingCartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent);
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

  

  it('should render five sizes', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.size-guide li').length).toEqual(5);
  });

  it('should render four thumbnail', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.thumbs .thumb-item').length).toEqual(4);
  });
});
