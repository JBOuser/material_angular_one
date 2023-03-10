import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/services/service-one.service';

import {MatDialog} from '@angular/material/dialog';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dress:any;

  constructor(
    public _service:ServiceOneService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dress = this._service.getAllDress();
  }

  showProduct(index:number){
    //Link: https://material.angular.io/components/dialog/examples
    this._dialog.open(ViewProductComponent,{
      data:index
    })
  }
}
