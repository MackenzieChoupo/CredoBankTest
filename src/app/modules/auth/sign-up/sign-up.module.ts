import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';
import { authSignupRoutes } from 'app/modules/auth/sign-up/sign-up.routing';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatNativeDateModule} from "@angular/material/core";


const maskConfig: Partial<IConfig> = {
    validation: true,
};

@NgModule({
    declarations: [
        AuthSignUpComponent
    ],
    imports     : [
        RouterModule.forChild(authSignupRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatMomentDateModule,
        FuseCardModule,
        FuseAlertModule,
        SharedModule,
        NgxMaskModule.forRoot(maskConfig),
        MatSlideToggleModule,
        MatPasswordStrengthModule,
    ]
})
export class AuthSignUpModule
{
}
