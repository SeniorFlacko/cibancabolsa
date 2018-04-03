import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {ViewChild} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit,AfterViewInit {
  chart = [];
  ordenes: boolean = false;
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
// Create 100 users
const users: UserData[] = [];
for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

// Assign the data to the data source for the table to render
this.dataSource = new MatTableDataSource(users);
}

/**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
        
  ngOnInit() {
    this.renderGraphic();
  }


  renderGraphic(){
    this.chart = new Chart('myChart',{
      type: 'line',
      data: {
          labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,61,7,18,19,20,21,22,23,2,4,25,26,27,28,29,30],
          datasets: [{
              label: 'Valor monetario',
              data: [3200, 3900, 4000, 6000, 3300, 3200,4100,5000,6000,7200,8000,5000,3000,5600,9000,7800,5800,3000,5000,4020,7040,8200,9040,5040,3040,2100,7030,4500,4400,8040,9400,3400],
              backgroundColor: [
                  'rgba(204, 230, 217, .8)'
              ],
              borderColor: [
                  'rgba(206,229,217,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                      
                  }
              }]
          },
          elements:{
            line:{
              tension:0
            }
          }

      }
    });
  }

  toggleOrdenes(){
      this.ordenes = !this.ordenes;
  }

}



/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
  
  /** Constants used to fill up our data base. */
  const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
  const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
  
  export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
  }