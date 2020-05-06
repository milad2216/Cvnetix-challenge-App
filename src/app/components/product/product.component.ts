import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { AddToCartComponent } from "../add-to-cart/add-to-cart.component";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  @Input("item") product: any;

  constructor(private modalService: NgbModal, private config: NgbModalConfig) {}

  ngOnInit() {}

  openAddToCart() {
    const modalRef = this.modalService.open(AddToCartComponent, { size: "xl" });
    modalRef.componentInstance.product = this.product;

    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      modalRef.close();
    });
  }
}
