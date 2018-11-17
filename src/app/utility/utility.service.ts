import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private http: HttpClient) { }

  public getByUrl(url: string): Observable<any> {
    const options = this.createRequestOptions();

    return this.http.get(url, options)
      .pipe(map((response: any) => response));
  }

  private createRequestOptions(): any {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append(
      'Access-Control-Allow-Origin', '*'
    );

    return {headers: headers};
  }
}
