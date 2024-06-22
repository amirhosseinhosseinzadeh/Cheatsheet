import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-children [events]="eventsSubject.asObservable()"> </app-children>
    <button (click)="emitEventToChild()">test</button>    
  `,
    styles: []
})
export class AppComponent {
    title = 'AngularRdy2';

    eventsSubject: Subject<void> = new Subject<void>();

    emitEventToChild() {
        this.eventsSubject.next();
    }
}
