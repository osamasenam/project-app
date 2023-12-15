import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() titleEvent = new EventEmitter<string>()

    onTitleClick (title: string) {
        this.titleEvent.emit(title);
        
    }

}