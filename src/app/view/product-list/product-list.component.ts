import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  products: any[];
  ngOnInit() {
    this.products = [
      {
        name: "Men Leaf Print Pocket Front Hawaiian Shirt",
        price: 120,
        images: ["../../../assets/images/shirt1.webp","../../../assets/images/shirt2.webp","../../../assets/images/shirt3.webp","../../../assets/images/shirt4.webp"],
        sizes:["S", "M", "L", "XL", "XXL"]
      },
      {
        name: "Men Leaf Print Pocket Front Hawaiian Shirt2",
        price: 94,
        images: ["../../../assets/images/shirt1.webp","../../../assets/images/shirt2.webp","../../../assets/images/shirt3.webp","../../../assets/images/shirt4.webp"],
        sizes:["S", "M", "XXL"]
      },
      {
        name: "Men Leaf Print Pocket Front Hawaiian Shirt3",
        price: 95,
        images: ["../../../assets/images/shirt1.webp","../../../assets/images/shirt2.webp","../../../assets/images/shirt3.webp","../../../assets/images/shirt4.webp"],
        sizes:["S", "M", "L", "XL", "XXL"]
      },
      {
        name: "Men Leaf Print Pocket Front Hawaiian Shirt4",
        price: 110,
        images: ["../../../assets/images/shirt1.webp","../../../assets/images/shirt2.webp","../../../assets/images/shirt3.webp","../../../assets/images/shirt4.webp"],
        sizes:["S", "M", "L", "XL", "XXL"]
      },
      {
        name: "Men Leaf Print Pocket Front Hawaiian Shirt5",
        price: 78,
        images: ["../../../assets/images/shirt1.webp","../../../assets/images/shirt2.webp","../../../assets/images/shirt3.webp","../../../assets/images/shirt4.webp"],
        sizes:["S", "M", "L", "XL", "XXL"]
      },
      {
        name: "Men Leaf Print Pocket Front Hawaiian Shirt6",
        price: 100,
        images: ["../../../assets/images/shirt1.webp","../../../assets/images/shirt2.webp","../../../assets/images/shirt3.webp","../../../assets/images/shirt4.webp"],
        sizes:["S", "M", "L", "XL", "XXL"]
      },
      {
        name: "Men Leaf Print Pocket Front Hawaiian Shirt7",
        price: 180,
        images: ["../../../assets/images/shirt1.webp","../../../assets/images/shirt2.webp","../../../assets/images/shirt3.webp","../../../assets/images/shirt4.webp"],
        sizes:["S", "M", "L", "XL", "XXL"]
      },
    ];
  }
}
