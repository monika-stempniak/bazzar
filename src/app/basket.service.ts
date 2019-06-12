import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "./product";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  private apiUrl = "http://localhost:3000/basket";

  constructor(private http: HttpClient) {}

  public getBasket(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl)
      .pipe(map(response => response));
  }

  public addToBasket(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  public deletefromBasket(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }
}
