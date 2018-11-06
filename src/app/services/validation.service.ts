import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }


  public isFieldValid(formInstance: FormGroup, field: string) {     
    return !formInstance.get(field).valid && formInstance.get(field).touched;
  }

  public isFieldValidOnLoad(formInstance: FormGroup, field: string) {
    if (!formInstance.get(field).valid) {
      return true;
    }
    return false;
  }

  public displayFieldCss(formInstance: FormGroup, field: string) {
    return {
      'is-invalid': this.isFieldValid(formInstance, field),
      'has-feedback': this.isFieldValid(formInstance, field)
    };
  }


  public makeInvalid() {
    return { valid: false };
  }

  public removeErrors(formInstance: FormGroup, field: string) {
    formInstance.get(field).setErrors(null);
  }

  public validateAllFormFields(formInstance: FormGroup) {
    Object.keys(formInstance.controls).forEach(field => {
      const control = formInstance.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public validateAfterSubmit(formInstance: FormGroup, data) {
    Object.keys(formInstance.controls).forEach(field => {
      const control = formInstance.get(field);
      if (control instanceof FormControl) {
        if (!data[field]) {
          control.setErrors(this.makeInvalid());
        }
      } else if (control instanceof FormGroup) {
        this.validateAfterSubmit(control, data[field]);
      }
    });
  }
 
}
