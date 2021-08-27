import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency_pipe',
})
export class CurrencyCustomPipe implements PipeTransform {
  transform(price) {
    let million = (price - (price % 1000000)) / 1000000;
    let thousand = Math.floor((price - million*1000000)/1000);
    let thousand_string;
    let result = "";
    if (million > 0) {
       if(thousand < 10) {
          thousand_string = `00${thousand}`
      } else if (thousand > 10 && thousand < 100) {
          thousand_string = `0${thousand}`
      } else {
          thousand_string = thousand.toString();
      }
      result = million.toString()+","+thousand_string+ ',000 VNĐ';
      
    } else {
    	thousand_string = thousand.toString();
      result = thousand_string+ ',000 VNĐ';
    }
    return result;
    
  }
}