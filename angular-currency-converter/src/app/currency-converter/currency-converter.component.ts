import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'angular-currency-converter', // This selector should match the one used in your template
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})

export class CurrencyConverterComponent implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  exchangeRates: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe(data => {
      this.exchangeRates = data.rates;
    });
  }

  convertCurrency(): number {
    if (this.exchangeRates) {
      const fromRate = this.exchangeRates[this.fromCurrency];
      const toRate = this.exchangeRates[this.toCurrency];
      return (this.amount / fromRate) * toRate;
    }
    return 0; // or handle this case as appropriate for your application
  }
  
}
