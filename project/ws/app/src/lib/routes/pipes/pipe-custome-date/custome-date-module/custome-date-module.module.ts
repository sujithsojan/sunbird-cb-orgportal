import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CustomeDatePipePipe } from '../custome-date-pipe.pipe'

@NgModule({
  declarations: [CustomeDatePipePipe],
  imports: [
    CommonModule,
  ],
  exports: [CustomeDatePipePipe],
})
export class CustomeDateModuleModule { }
