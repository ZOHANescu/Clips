import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    showAlert = false;
    alertMessage = "Please wait! Your account is being created.";
    alertColor = "blue";

    register() {
        this.showAlert = true;
        this.alertMessage = "Please wait! Your account is being created.";
        this.alertColor = "blue";
    }

    name = new FormControl('', [
        Validators.required,
        Validators.minLength(3)
    ])
    email = new FormControl('', [
        Validators.required,
        Validators.email
    ])
    age = new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(120)
    ])
    password = new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/gm)
    ])
    confirmPassword =  new FormControl('', [
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
    });
}
