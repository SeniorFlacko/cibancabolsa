import { DataSource } from "@angular/cdk/collections";
import { OrdenPendiente } from "../models/index.models";
import { Observable } from "rxjs/Observable";
import { CollectionViewer } from "@angular/cdk/collections";
import { BehaviorSubject } from "rxjs";
import { OrdenesPendientesService } from "../services/index.services";
import { of } from "rxjs/observable/of";
import { catchError, finalize } from "rxjs/operators";

export class OrdenesDataSource implements DataSource<OrdenPendiente> {

    private ordenesSubject = new BehaviorSubject<OrdenPendiente[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private op: OrdenesPendientesService) {}

    connect(collectionViewer: CollectionViewer): Observable<OrdenPendiente[]> {
        return this.ordenesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.ordenesSubject.complete();
        this.loadingSubject.complete();
    }

    loadOrdenes(filter = '',sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
        
        this.loadingSubject.next(true);

        this.op.findOrdenes(filter, sortDirection,
            pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(lessons => this.ordenesSubject.next(lessons));
    }    
}
