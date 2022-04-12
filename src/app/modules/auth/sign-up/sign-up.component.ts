import {ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import {MAT_DATE_FORMATS} from '@angular/material/core';
import * as _moment from 'moment';

import  * as _rollupMoment from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {

    parse: {
        dateInput: 'YYYY-MM-DD',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    }

};


@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class AuthSignUpComponent implements OnInit
{
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signUpForm = this._formBuilder.group({
                name      : ['', Validators.required],
                email     : ['', [Validators.required, Validators.email]],
                password  : ['', Validators.required],
                phone   : ['', Validators.required],
                birthday   : [''],
                agreements: ['', Validators.requiredTrue]
            }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void
    {
        // Do nothing if the form is invalid
        if ( this.signUpForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        console.log(this.signUpForm.value);

    }
}
