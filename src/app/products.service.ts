import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Products } from "./products";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private apiUrl =
    "https://my-json-server.typicode.com/monika-stempniak/bazzar";

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Products[]> {
    return this.http
      .get<Products[]>(`${this.apiUrl}/products`)
      .pipe(map(response => response));
  }
}
