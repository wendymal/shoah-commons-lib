import { NgModule } from '@angular/core';
import { ShoahCommonsComponent } from './shoah-commons.component';
import { UcdComponent } from '../lib/ucd/ucd/ucd.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [ShoahCommonsComponent, UcdComponent, TimeAgoPipe],
  imports: [
  ],
  exports: [ShoahCommonsComponent,UcdComponent, TimeAgoPipe]
})
export class ShoahCommonsModule { }
