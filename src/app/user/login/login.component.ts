import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    showAlert = false;
    alertColor = 'blue';
    alertMessage = 'Logging in...';
    inSubmission = false;

    credentials = {
        email: '',
        password: ''
    }
    
    constructor(private auth: AngularFireAuth) {}

    async login() {

        try {
            
            this.alertColor = 'blue';
            this.alertMessage = 'Logging in...';
            this.inSubmission = true;
            this.showAlert = true;

            await this.auth.signInWithEmailAndPassword(
                this.credentials.email, this.credentials.password
            )
        } catch (e) {
            console.error(e);

            this.showAlert = true;
            this.alertColor = 'red';
            this.alertMessage = 'Failed to login.';
            this.inSubmission = false;

            return;
        }

        this.alertColor = 'green';
        this.alertMessage = 'Logged in with success';
        this.inSubmission = false;
    }
}
