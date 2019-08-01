import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassesComponent } from './classes.component';

@NgModule({
  declarations: [ClassesComponent],
  imports: [SharedModule]
})
export class ClassesModule {}
