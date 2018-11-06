import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  public sendSMS(formData): Observable<any> {
    return this._http.post<any>('https://textbelt.com/text', 
      {
        phone: '+5511976120830', // este é meu telefone!
        message: `Mensagem enviada de: ${formData.telefone} \n ${formData.mensagem}`,
        key: "textbelt"
      }
    );
  }

  public sendMail(formData): Observable<any> {
    return this._http.post<any>('', { data: formData});
  }
}
