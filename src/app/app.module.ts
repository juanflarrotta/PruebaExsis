import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LogoComponent,
    SliderComponent,
    ContenidoComponent,
    FooterComponent,
    FormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, NgImageSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
