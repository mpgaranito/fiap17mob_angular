import { Component, Input } from '@angular/core';

@Component({
    selector: 'loading-component',
    templateUrl: './Loading.components.html',
    styleUrls: ['./Loading.components.css']
})

export class LoadingComponent { 

    @Input() show: boolean = false;

}