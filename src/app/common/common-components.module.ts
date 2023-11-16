import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  exports: [HeaderComponent],
})
export class CommonComponentsModule {}
