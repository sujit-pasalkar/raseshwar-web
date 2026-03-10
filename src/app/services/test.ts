import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Test {
  constructor(private readonly http: HttpClient) {}

  testAPI(): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer  eyJhbGciOi',
    };
    const payload: any = {};

    const httpOptions = {
      headers: headers,
    };

    return this.http.post(
      'https://dps-provisioning-api.dev.bnymellon.net/api/v1/snowflake/data-share/inbound',
      payload,
      httpOptions,
    );
  }
}
