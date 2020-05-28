import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandenPortalClientSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [BrandenPortalClientSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent],
})
export class AuditsModule {}
