import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface Usuario {
  nome: string;
}

export interface StateGroup {
  letter: string;
  names: string[];
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  controleSimples = new FormControl();
  controleComFiltro = new FormControl();
  controleObjeto = new FormControl();
  controleDiferente = new FormControl();

  opcoes: string[] = ['Bolacha', 'Biscoito', 'Boloito', 'Biscacha'];
  opcoesFiltradas: Observable<string[]>;
  usuarios: Usuario[] = [
    { nome: 'Douglas Gabriel Angeli' },
    { nome: 'Gabriel Angeli' },
    { nome: 'Gabriel' },
    { nome: 'Lickoski' },
    { nome: 'Vinicius' },
    { nome: 'Filipe' },
  ];
  usuariosFiltrados: Observable<Usuario[]>;

  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });
  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];
  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.opcoesFiltradas = this.controleComFiltro.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );

    this.usuariosFiltrados = this.controleObjeto.valueChanges
      .pipe(
        startWith<string | Usuario>(''),
        map(value => typeof value === 'string' ? value : value.nome),
        map(name => name ? this.filterUser(name) : this.usuarios.slice())
      );

    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterGroup(value))
      );
  }

  displayFn(user?: Usuario): string | undefined {
    return user ? user.nome : undefined;
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.opcoes.filter(option => option.toLowerCase().includes(filterValue));
  }

  private filterUser(name: string): Usuario[] {
    const filterValue = name.toLowerCase();
    return this.usuarios.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  private filterState(opt: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }

  private filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: this.filterState(group.names, value) }))
        .filter(group => group.names.length > 0);
    }
    return this.stateGroups;
  }

}
