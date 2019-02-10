import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {

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

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'email obrigatório' :
      this.email.hasError('email') ? 'email inválido' :
        '';
  }

}
