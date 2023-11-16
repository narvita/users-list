import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersListComponent } from './components/users-list/users-list.component';
import { TableComponent } from './shared/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from './common/common-components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    TableComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    CommonComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
