import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass'],
})
export class ChildComponent {
  @Input() dataToDisplay: { name: string; desc: string }[] | undefined;
  @Output() actionEmitter = new EventEmitter();

  executeAction = (data: { name: string; desc: string }, action: string) => {
    switch (action) {
      case 'edit': //...
        this.actionEmitter.emit({ data, action });
        break;
      case 'delete': //...
        this.actionEmitter.emit({ data, action });
        break;
    }
  };
}
