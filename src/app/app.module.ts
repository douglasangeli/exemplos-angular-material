import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';


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
