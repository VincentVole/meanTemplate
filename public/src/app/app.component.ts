import { Component } from '@angular/core';
import { HttpService } from './http.service'; // <-- import your service whereever you'd like to use it


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _http: HttpService){} // <-- then inject it via the constructor


}
