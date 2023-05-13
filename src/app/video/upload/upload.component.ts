import { Component } from '@angular/core';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css'],
})
export class UploadComponent {

    isDragOver: boolean = false;
    file: File | null = null;

    setDragOver(state: boolean) {
        this.isDragOver = state;
    }

    handleUpload($event: Event) {
        this.setDragOver(false);
        this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null;


        console.log(this.file);

        if(!this.file || this.file.type !== 'video/mp4') {
            console.log('wrong file format');
        } else console.log('good file');

    }
}
