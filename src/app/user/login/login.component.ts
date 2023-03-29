import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    showAlert = false;
    alertMessage = 'Trying to login. Please wait...';
    alertColor = 'green'

    login() {
        this.showAlert = true;
        this.alertMessage = 'Trying to login. Please wait...';
        this.alertColor = 'green'
    }

    credentials = {
        email: '',
        password: ''
    }

    constructor() {}
}
