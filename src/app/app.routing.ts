import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipsComponent } from './chips/chips.component';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProgressComponent } from './progress/progress.component';
import { TabelasComponent } from './tabelas/tabelas.component';
import { StepperComponent } from './stepper/stepper.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { BadgesComponent } from './badges/badges.component';
import { InicialComponent } from './inicial/inicial.component';

const appRoutes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'formfields', component: FormFieldsComponent },
  { path: 'radioButton', component: RadioButtonComponent },
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'slideToggle', component: SlideToggleComponent },
  { path: 'autoComplete', component: AutocompleteComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'tabelas', component: TabelasComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'gridlist', component: GridListComponent },
  { path: 'badge', component: BadgesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
