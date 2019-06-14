import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TruncateModule } from "@yellowspot/ng-truncate";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { BasketComponent } from "./basket/basket.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsService } from "./products.service";
import { HttpClientModule } from "@angular/common/http";
import { BasketService } from "./basket.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BasketComponent,
    ContactComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TruncateModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [ProductsService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
