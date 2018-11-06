import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-form-sms',
  templateUrl: './form-sms.component.html',
  styleUrls: ['./form-sms.component.scss']
})
export class FormSmsComponent implements OnInit {

  formSMS: FormGroup;

  constructor(  
    private fb: FormBuilder, 
    public _validation: ValidationService,
    public _http: HttpService
  ) { }

  ngOnInit() {
    this.formSMS = this.fb.group({
      telefone: ['', [
          Validators.required
      ]],
      mensagem: ['', [
          Validators.required
      ]],
  });
  }


  public enviarSMS(formData) : void {
    this._http.sendSMS(formData).subscribe(response => {
      if (response.success === true) {
        alert('Mensagem enviada com sucesso!!');
      } else {
        alert(`Ops! Não foi possível enviar sua mensagem! \nConfira a resposta do servidor: ${response.error}`);
      }
      console.log(response);
      
  });
  }

}
