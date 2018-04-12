import { Component, OnInit, ElementRef } from '@angular/core';
import {ViewChild} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { OrdenesDataSource } from '../../../../datasources/ordenes-data-source';
import { OrdenesPendientesService } from '../../../../services/index.services';

@Component({
  selector: 'tabla-mercado-capitales-pendientes',
  templateUrl: './tabla-mercado-capitales-pendientes.component.html',
  styleUrls: ['./tabla-mercado-capitales-pendientes.component.css']
})
export class TablaMercadoCapitalesPendientesComponent implements OnInit {
  dataSource: OrdenesDataSource;
  displayedOrdenColumns = ['clave','folio','sentido','fecha','titulos','estatus','orden','promedio','limite','importe'];

  pageSizeOptions = [3, 5, 10];
  pageSize = 10;
  length = 100;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild('input') input: ElementRef;
  constructor(private opendientesService: OrdenesPendientesService) { }

  ngOnInit() {
    this.dataSource = new OrdenesDataSource(this.opendientesService);
    this.dataSource.loadOrdenes();
  }

  ngAfterViewInit() {
    
    //Si el sort cambio posicionarse en la pagina 0
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    
    //Detonar busqueda en evento keyup del input buscador.
    // fromEvent(this.input.nativeElement,'keyup')
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged(),
    //     tap(()=>{
    //       this.paginator.pageIndex = 0;
    //       this.loadOrdenesPage()
    //     })
    // ).subscribe();

    //Evento sort por columna, Evento Next Paginador
    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadOrdenesPage())
        )
        .subscribe();
  }

  //Consultar Servicio de cargar pagina
  loadOrdenesPage() {
    let input_buscador_value = '';
    //input_buscador_value = this.input.nativeElement.value;
    this.dataSource.loadOrdenes(input_buscador_value,this.sort.direction
      ,this.paginator.pageIndex,this.paginator.pageSize);
  }

}
