import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { BasketComponent } from "./basket/basket.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsService } from "./products.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BasketComponent,
    ContactComponent,
    ProductDetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
