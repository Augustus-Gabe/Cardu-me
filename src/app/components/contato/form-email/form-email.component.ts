import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.scss']
})
export class FormEmailComponent implements OnInit {
  formContato: FormGroup;

  constructor(  
    private fb: FormBuilder, 
    public _validation: ValidationService,
    public _http: HttpService,
  ) { }

  ngOnInit() {
    this.formContato = this.fb.group({
      email: ['', [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      mensagem: ['', [
          Validators.required
      ]],
  });
  }


  public enviarMsg(formData) : void {
    
  }

}
