import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
    constructor() { }
    @Input() rating: number;
    starWidth: number;
    ngOnInit() { }
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}