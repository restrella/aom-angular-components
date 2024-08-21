import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.sass'],
})
export class CommandBarComponent {
  @Input() buttons: { label: string; action: string }[] | undefined;
  @Output() actionEmitter = new EventEmitter();

  executeAction(event: { data: any; action: string }) {
    this.actionEmitter.emit(event);
  }
}
