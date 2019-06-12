import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { Product } from "../product";
import { ProductsService } from "../products.service";
import { BasketService } from "../basket.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private productsService: ProductsService,
    private basketService: BasketService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productsService.getProducts();
  }

  showSuccess() {
    this.toastr.success("Toastr fun!");
  }

  addToBasket(product: Product) {
    this.showSuccess();
    this.basketService.addToBasket(product).subscribe();
  }
}
