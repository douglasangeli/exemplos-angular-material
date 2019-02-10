import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MAT_DATE_LOCALE,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatExpansionModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatStepperModule,
  MatGridListModule,
  MatBadgeModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AppRoutingModule } from './app.routing';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipsComponent } from './chips/chips.component';
import { ButtonComponent } from './button/button.component';
import { DialogOverviewExampleDialogComponent } from './shared/dialog-overview-example-dialog';
import { BottomSheetOverviewExampleSheetComponent } from './shared/bottom-sheet-overview-example-sheet';
import { TabsComponent } from './tabs/tabs.component';
import { ProgressComponent } from './progress/progress.component';
import { TabelasComponent } from './tabelas/tabelas.component';
import { StepperComponent } from './stepper/stepper.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { BadgesComponent } from './badges/badges.component';
import { InicialComponent } from './inicial/inicial.component';

const ptBrDateProvider: Provider = { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' };

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormFieldsComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent,
    AutocompleteComponent,
    ChipsComponent,
    ButtonComponent,
    DialogOverviewExampleDialogComponent,
    BottomSheetOverviewExampleSheetComponent,
    TabsComponent,
    ProgressComponent,
    TabelasComponent,
    StepperComponent,
    GridListComponent,
    BadgesComponent,
    InicialComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatStepperModule,
    MatGridListModule,
    MatBadgeModule
  ],
  providers: [
    ptBrDateProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    BottomSheetOverviewExampleSheetComponent
  ]
})
export class AppModule { }
