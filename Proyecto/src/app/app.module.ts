import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/layout/about/about.component';
import { ProfileComponent } from './home/layout/profile/profile.component';
import { CardComponent } from './home/layout/card/card.component';
import { ListComponent } from './home/layout/list/list.component';
import { BoardComponent } from './home/layout/board/board.component';
import { FooterComponent } from './home/layout/footer/footer.component';
import { ModelsComponent } from './home/models/models.component';
import { LayoutComponent } from './home/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    CardComponent,
    ListComponent,
    BoardComponent,
    FooterComponent,
    ModelsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
