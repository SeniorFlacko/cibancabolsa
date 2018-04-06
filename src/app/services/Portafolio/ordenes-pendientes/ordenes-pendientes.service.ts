import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OrdenPendiente } from '../../../models/index.models';

@Injectable()
export class OrdenesPendientesService {
  ordenes_pendientes: OrdenPendiente[] = [
    {
      "fecha": "01/12",
      "emisora": "ABC",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    },
    {
      "fecha": "02/12",
      "emisora": "ABC",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    },
    {
      "fecha": "03/12",
      "emisora": "ABC",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    },
    {
      "fecha": "04/12",
      "emisora": "ABC",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    },
    {
      "fecha": "05/12",
      "emisora": "ABC",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    },
    {
      "fecha": "06/12",
      "emisora": "SARE B",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    },
    {
      "fecha": "07/12",
      "emisora": "ABC",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    }
  ];
  constructor() { }
  
  getOrdenesPendientes(): Observable<OrdenPendiente[]> {
    return of(this.ordenes_pendientes);
  }

  findOrdenes(filter = '',sortOrder = 'asc',pageNumber = 0, pageSize = 3):Observable<OrdenPendiente[]> {

    // return this.http.get('/api/lessons', {
    //     params: new HttpParams()
    //         .set('courseId', courseId.toString())
    //         .set('filter', filter)
    //         .set('sortOrder', sortOrder)
    //         .set('pageNumber', pageNumber.toString())
    //         .set('pageSize', pageSize.toString())
    // }).pipe(
    //     map(res =>  res["payload"])
    // );
    let response = this.searchOrdenes(filter,sortOrder,pageNumber,pageSize);
    return of(response).delay(1000);
  }


  //This simulates a service
  searchOrdenes(filter = '',sortOrder = 'asc',pageNumber = 0, pageSize = 3) {

    let filtro = filter || '',
          sortOrden = sortOrder,
          pageNum = pageNumber || 0,
          pageSiz = pageSize;

    //filter by id
    // let ordenes = this.ordenes_pendientes.filter(orden => orden.id == id).sort((l1, l2) => l1.id - l2.id);
    let ordenes: OrdenPendiente[];
    ordenes = this.ordenes_pendientes;

    if (filter) {
       ordenes = ordenes.filter(orden => orden.emisora.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        ordenes = ordenes.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const ordenesPage = ordenes.slice(initialPos, initialPos + pageSize);

    // setTimeout(() => {
    //     res.status(200).json({payload: ordenesPage});
    // },1000);

    return ordenesPage;
  }

}
