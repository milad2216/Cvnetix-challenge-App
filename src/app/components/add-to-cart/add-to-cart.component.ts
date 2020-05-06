import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  faMinus,
  faPlus,
  faShippingFast,
  faHeart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartO } from "@fortawesome/free-regular-svg-icons";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";

@Component({
  selector: "add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.scss"],
})
export class AddToCartComponent implements OnInit {
  @Input() product: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  selectedImage: string;
  selectedSize: string;
  error: string;
  faMinus = faMinus;
  faPlus = faPlus;
  faTimes = faTimes;
  faHeart = faHeart;
  faHeartO = faHeartO;
  quantity = 1;
  faShippingFast = faShippingFast;
  favorite = false;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  closeModal(){
    this.passEntry.emit();
  }

  mouseEnter(image) {
    this.selectedImage = image;
  }

  toggleFavorite() {
    this.favorite = !this.favorite;
  }

  dec() {
    if (this.quantity > 1) this.quantity--;
  }

  inc() {
    this.quantity++;
  }

  selectSize(size) {
    this.selectedSize = size;
    this.error = "";
  }

  addToCart() {
    if (!this.selectedSize) {
      this.error = "Please select size";
    }
    const data = {
      productId: this.product.Id,
      productName: this.product.name,
      quantity: this.quantity,
      size: this.selectedSize,
    };

    this.shoppingCartService.AddToCart(data).subscribe(
      (result) => {
        this.passEntry.emit();
      },
      (error) => {
        this.passEntry.emit();
      }
    );
  }
}
