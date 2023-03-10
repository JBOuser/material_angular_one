import { Injectable } from '@angular/core';
import products from '../../assets/products.json'
@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  chart:any[] = [];

  constructor() { }

  getAllDress(){
    return products.dress;
  }

  getChart(){
    return this.chart;
  }

  addProduct(p:any){
    var i = this.chart.findIndex((prod) => {
      return p._id === prod._id
    })
    
    return (-1 < i)?
      this.chart[i].quantity++:
      this.chart.push({_id:p._id,quantity:1})
  }

  getChartTotalQuantity(){
    return this.chart
      .map((item) => item.quantity)
      .reduce((total,curr) => total + curr, 0)
  }
}
