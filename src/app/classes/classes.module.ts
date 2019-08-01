import { NgModule } from '@angular/core';
import { ClassesComponent } from './classes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ClassesComponent],
  imports: [SharedModule]
})
export class ClassesModule {}
