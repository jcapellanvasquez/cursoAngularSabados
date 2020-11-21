import {Component, OnInit} from '@angular/core';
import {DataBaseService} from './data-base.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyectoFinal';
  fecha: Date = null;

  constructor(private data: DataBaseService) {
  }

  ngOnInit(): void {
    this.data.getData()
      .pipe(
        map(data => {
          const d: Array<any> = data;
          // Filtrar 1 solo registro con find
          // return d.find( row => row.first_name === 'Sandi');
          return d.filter( rows => rows.id >= 50);
        })
      )
      .subscribe(console.log);
  }

  log(event) {
    const myDate = new Date(event);
    console.log(myDate.getTime());
  }
}
