import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable()
export class ShoppingCartService {

    protected baseUrl: string = '';
    protected _serviceUrl: string = '/api/ShoppingCart';

    protected serviceUrl() { return this.baseUrl + this._serviceUrl }

    protected cartItems: any[] = [];

    constructor(private http: HttpClient, injector: Injector) {

    }

    protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': `application/vnd.iman.v1+json, application/json, text/plain, */*`,
            'App-Version': '1'
        });

        return { headers: headers };
    }

    AddToCart(model: any) {
        // add to local array
        this.cartItems.push(model);

        //send request to server api 
        if (this._serviceUrl.trim().length == 0)
            return throwError(`service url is empty!`);
        const url = `${this.serviceUrl()}/AddToCart`;
        return this.http.post<any>(url, model, this.getRequestHeaders());
    }

}
