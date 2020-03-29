import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError, Observable } from 'rxjs';
import { NotFoundErrorModel } from '../../core/error';
import {  FactoryPrincipal } from './models';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = `${environment.api}api/v1/feature`;
@Injectable()
export class ApiFactoryHttpService {
    constructor(private http: HttpClient) { }


    private handleError(operation: string, err: HttpErrorResponse) {
        if (err.status === 400) {
            return throwError(new NotFoundErrorModel());
        } else {
            return throwError(err.error);
        }
    }

    public getFactory(): Observable<FactoryPrincipal> {
        const api = `${apiUrl}`;
        return this.http.get<FactoryPrincipal>(api)
            .pipe(
                tap(factory => console.log('fetched Factories')),
                catchError((err: HttpErrorResponse) => {
                    return this.handleError('getFactory', err);
                }));
    }
}
