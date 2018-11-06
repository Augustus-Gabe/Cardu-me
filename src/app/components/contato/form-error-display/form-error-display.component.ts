import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.scss']
})
export class FormErrorDisplayComponent {
  @Input() errorMsg: string;
  @Input() errorMsgInverse: string;
  @Input() displayError: boolean;
}
