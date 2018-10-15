import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Comida {
  value: string;
  viewValue: string;
}

export interface Animal {
  name: string;
  sound: string;
}

export interface Pokemon {
  value: string;
  viewValue: string;
}

export interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent {

  panelColor = new FormControl('red');
  disableSelect = new FormControl(false);

  animalControl = new FormControl('', [Validators.required]);
  animals: Animal[] = [
    { name: 'Cachorro', sound: 'Woof!' },
    { name: 'Gato', sound: 'Meow!' },
    { name: 'Vaca', sound: 'Moo!' },
    { name: 'Raposa', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  comidasControl = new FormControl();
  comidaSelecionada: string;
  comidas: Comida[] = [
    { value: 'batata-frita', viewValue: 'Batata Frita' },
    { value: 'pizza', viewValue: 'Pizza' },
    { value: 'churrasco', viewValue: 'Churrasco' }
  ];

  pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
      ]
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' }
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' }
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ]
    }
  ];

}
