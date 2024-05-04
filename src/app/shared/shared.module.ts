import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { ResaltadoDirective } from './directive/resaltado.directive';
import { RepetirDirective } from './directive/repetir.directive';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    FormFieldValidationErrorsPipe,
    ResaltadoDirective,
    RepetirDirective,
  ],
  imports: [CommonModule],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    FormFieldValidationErrorsPipe,
    ResaltadoDirective,
    RepetirDirective,
  ],
})
export class SharedModule {}