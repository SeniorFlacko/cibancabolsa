import { Component, OnInit, ElementRef } from '@angular/core';
import {ViewChild} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { OrdenesPendientesService } from '../../../services/index.services';
import { OrdenesDataSource } from '../../../datasources/ordenes-data-source';
import { tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'tabla-ordenes-pendientes',
  templateUrl: './tabla-ordenes-pendientes.component.html',
  styleUrls: ['./tabla-ordenes-pendientes.component.css']
})
export class TablaOrdenesPendientesComponent implements OnInit, AfterViewInit {

  dataSource: OrdenesDataSource;
  displayedOrdenColumns = ['clave','folio','sentido','fecha','titulos','estatus','orden','promedio','limite','importe'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('input') input: ElementRef;

  constructor(private opendientesService: OrdenesPendientesService) { }

  ngOnInit() {
    this.dataSource = new OrdenesDataSource(this.opendientesService);
    this.dataSource.loadOrdenes();
  }

  ngAfterViewInit() {
    
    //Si el sort cambio posicionarse en la pagina 0
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    
    //Detonar busqueda en evento keyup del input buscador.
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(()=>{
          this.paginator.pageIndex = 0;
          this.loadOrdenesPage()
        })
    ).subscribe();

    //Evento sort por columna, Evento Next Paginador
    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadOrdenesPage())
        )
        .subscribe();
  }

  //Consultar Servicio de cargar pagina
  loadOrdenesPage() {
    this.dataSource.loadOrdenes(this.input.nativeElement.value,this.sort.direction
      ,this.paginator.pageIndex,this.paginator.pageSize);
  }
  
}
