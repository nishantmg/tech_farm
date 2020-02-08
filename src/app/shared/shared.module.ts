import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
  ],
  providers: [
  ]
})
export class SharedModule { }
