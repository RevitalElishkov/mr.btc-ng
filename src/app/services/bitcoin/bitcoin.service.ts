import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }
  
  getRate(coins){
    return this.http.get<{ data: string }>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    .pipe(
      map(res => res)
    )
  } 
}
