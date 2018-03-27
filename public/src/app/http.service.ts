import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <-- make sure to import HttpClient

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { } // <-- then inject it via the constructor

}
