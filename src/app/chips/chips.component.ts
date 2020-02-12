import { Component, ViewChild, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  /*
   * COM FILTRO
   */
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Limão'];
  allFruits: string[] = ['Maçã', 'Limão', 'Lima', 'Laranja', 'Morango'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  /*
   * SEM FILTRO
   */
  visible1 = true;
  selectable1 = true;
  removable1 = true;
  addOnBlur1 = true;
  fruits1: Fruit[] = [
    { name: 'Limão' },
    { name: 'Laranja' },
    { name: 'Maçã' },
  ];

  add1(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits1.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove1(fruit: Fruit): void {
    const index = this.fruits1.indexOf(fruit);

    if (index >= 0) {
      this.fruits1.splice(index, 1);
    }
  }

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
