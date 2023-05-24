import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidators } from '../validators/register-validators';
import { EmailTaken } from '../validators/email-taken';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    showAlert = false;
    alertMessage = "Please wait! Your account is being created.";
    alertColor = "blue";
    inSubmission = false;

    constructor(
        private auth: AuthService,
        private emailTaken: EmailTaken
    ) { }

    async register() {

        this.showAlert = true;
        this.alertMessage = "Please wait! Your account is being created.";
        this.alertColor = "blue";
        this.inSubmission = true;

        try {

            await this.auth.createUser(this.registerForm.value as IUser);

        } catch (error) {

            console.error(error);

            this.alertMessage = 'An unexpected error has occured when trying to register. Please try again later.';
            this.alertColor = 'red';
            this.inSubmission = false;

            return;
        }

        this.alertMessage = "Success! Your account has been created. ";
        this.alertColor = "green";
        this.inSubmission = false;

    }

    name = new FormControl('', [
        Validators.required,
        Validators.minLength(3)
    ])
    email = new FormControl('', [
        Validators.required,
        Validators.email,
    ], [
        this.emailTaken.validate
    ])
    age = new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(18),
        Validators.max(120)
    ])
    password = new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]*')
        // Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$")
        // Validators.pattern("^(?=.{4,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$")
    ])
    confirmPassword = new FormControl('', [
        Validators.required,
    ])
    phoneNumber = new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
    ])

    registerForm = new FormGroup({
        name: this.name,
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        phoneNumber: this.phoneNumber
    }, [RegisterValidators.match('password', 'confirmPassword')]);
}
