import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent {

  esconderSenha: boolean;
  options: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'email obrigatório' :
      this.email.hasError('email') ? 'email inválido' :
        '';
  }

}
