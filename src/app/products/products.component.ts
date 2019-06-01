import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Products } from "../products";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Observable<Products[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productsService.getProducts();
  }
}
