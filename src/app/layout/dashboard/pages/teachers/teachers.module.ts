import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './store/teacher.effects';
import { StoreModule } from '@ngrx/store';
import { teacherFeature } from './store/teacher.reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { TeachersDialogComponent } from './components/teacher-dialog/teacher-dialog.component';


@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDialogComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatTableModule,
    StoreModule.forFeature(teacherFeature),
    EffectsModule.forFeature([TeacherEffects])
  ]
})
export class TeachersModule { }
