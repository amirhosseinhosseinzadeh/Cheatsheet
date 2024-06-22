import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-children',
  template: `
    <p>
      children works!
    </p>
  `,
  styles: [
  ]
})
export class ChildrenComponent implements OnInit, OnDestroy {

  constructor() { }

  private eventsSubscription ?: Subscription;

@Input() events?: Observable<void>;

ngOnInit(){
  this.eventsSubscription = this.events?.subscribe(() => this.doSomething());
}

doSomething(){
    alert('a')
}

ngOnDestroy() {
  this.eventsSubscription?.unsubscribe();
}

}
