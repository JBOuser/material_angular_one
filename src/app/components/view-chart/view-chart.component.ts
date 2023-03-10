import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceOneService } from 'src/app/services/service-one.service';

@Component({
  selector: 'app-view-chart',
  templateUrl: './view-chart.component.html',
  styleUrls: ['./view-chart.component.css']
})
export class ViewChartComponent implements OnInit {

  constructor(
    public refDialog: MatDialogRef<ViewChartComponent>,
    public _service: ServiceOneService
  ) {}

  ngOnInit(): void {
  }

  getProductsInChart(){
    return this._service.getChart();
  }

  getProductById(id:string){  
    return this._service.getAllDress().filter((prod) => {
      return id === prod._id
    })[0]
  }
}
