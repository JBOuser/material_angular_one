import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewChartComponent } from './components/view-chart/view-chart.component';
import { ServiceOneService } from './services/service-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material_angular_one';

  constructor(
    public service:ServiceOneService,
    public dialog: MatDialog
  ){}

  showChart(){
    this.dialog.open(ViewChartComponent,
      {width:'450px'}
    )
  }
}
