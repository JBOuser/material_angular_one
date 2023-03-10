import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceOneService } from 'src/app/services/service-one.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private _service:ServiceOneService,
    @Inject(MAT_DIALOG_DATA) public index: number,
    public refDialog: MatDialogRef<ViewProductComponent>,
    private _snackBar:MatSnackBar
  ){}

  ngOnInit(): void {    
  }

  getProduct(){
    return this._service.getAllDress()[this.index];
  }

  closeDialog(){
    //close the dialog
    this.refDialog.close();
  }

  addProductToChart(){
    this._service.addProduct(this.getProduct());
    this.openSnackBar('Item added to chart','OK');    
    //close the dialog
    this.refDialog.close();
  }

  //Link: https://material.angular.io/components/snack-bar/examples
  openSnackBar(message:string, button:string){
    this._snackBar.open(message, button, {
      duration: 3000,
    });
  }
}
