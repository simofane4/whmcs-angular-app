import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WhmcsService {

  private apiUrl = environment.whmcsApiUrl;

  constructor(private http: HttpClient) { }

  getClientDetails(clientId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = `action=GetClientsDetails&identifier=${environment.apiIdentifier}&secret=${environment.apiSecret}&clientid=${clientId}&responsetype=json`;

    return this.http.post(this.apiUrl, body, { headers });
  }


  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  
    const body = `action=ValidateLogin&username=${username}&password=${password}&identifier=${environment.apiIdentifier}&secret=${environment.apiSecret}&responsetype=json`;
  
    return this.http.post(this.apiUrl, body, { headers });
  }

  getClientInvoices(clientId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  
    const body = `action=GetInvoices&identifier=${environment.apiIdentifier}&secret=${environment.apiSecret}&userid=${clientId}&responsetype=json`;
  
    return this.http.post(this.apiUrl, body, { headers });
  }

  getClientDomains(clientId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  
    const body = `action=GetClientsDomains&identifier=${environment.apiIdentifier}&secret=${environment.apiSecret}&userid=${clientId}&responsetype=json`;
  
    return this.http.post(this.apiUrl, body, { headers });
  }
  


  

}
