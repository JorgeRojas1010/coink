import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRequestComponent } from './pages/card-request/card-request.component';
import { CardRequestRoutingModule } from './card-request.routing';
import { FormsModule } from '@angular/forms';
// TODO: moved material module
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumdComponent } from 'src/app/shared/components/breadcrumd/breadcrumd.component';

@NgModule({
  declarations: [CardRequestComponent, BreadcrumdComponent],
  imports: [
    CommonModule,
    CardRequestRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class CardRequestModule { }
