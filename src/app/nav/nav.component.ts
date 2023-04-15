import { Component, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
})
export class NavComponent {

    @Input() routerLinkActiveOptions = {
        exact: true
    };

    constructor(
        public modal: ModalService,
        public auth: AuthService,
    ) {}

    public openModal($event: Event) {
        $event.preventDefault();
        this.modal.toggleModal("auth");
    }
}
