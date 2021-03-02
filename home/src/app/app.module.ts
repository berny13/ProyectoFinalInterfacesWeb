import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatDividerModule} from '@angular/material/divider';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrincipalComponent } from './principal/principal.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RegisterComponent } from './register/register.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatDividerModule,
    MatToolbarModule,
    MatAutocompleteModule,
    FormsModule, 
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatListModule,
    PickerModule,
    ScrollingModule,
    MatFormFieldModule,
    MatMenuModule,
    MatNativeDateModule, 
    MatRippleModule,
    MatInputModule,
    MatSidenavModule,
    NoopAnimationsModule,
    MatProgressBarModule

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatDividerModule,
    MatToolbarModule,
    MatAutocompleteModule,
    FormsModule, 
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatListModule,
    PickerModule,
    ScrollingModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
