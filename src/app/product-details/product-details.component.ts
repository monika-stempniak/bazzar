import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Product } from "../product";
import { ProductsService } from "../products.service";
import { BasketService } from "../basket.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private basketService: BasketService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productsService
      .getProduct(id)
      .subscribe(response => (this.product = response));
  }

  goBack(): void {
    this.location.back();
  }

  addToBasket(product: Product) {
    this.basketService.addToBasket(product).subscribe();
  }
}
