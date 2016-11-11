import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
    constructor() { }
    rating: number = 4;
    starWidth: number;
    ngOnInit() { }
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}