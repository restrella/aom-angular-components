import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass'],
})
export class ParentComponent {
  dataToDisplay = [
    { name: 'book1', desc: 'bookdesc1' },
    { name: 'book2', desc: 'bookdesc2' },
  ];

  buttons = [
    { label: 'Add Book', action: 'add' },
    { label: 'Delete All', action: 'deleteAll' },
    { label: 'Randomize', action: 'randomize' },
  ];

  executeAction = (event: {
    data: { name: string; desc: string };
    action: string;
  }) => {
    switch (event.action) {
      case 'edit': {
        console.log(
          'you can call service to edit and redirect to page with data: ',
          event.data
        );
        break;
      }
      case 'delete': {
        console.log('delete');
        break;
      }
      case 'delete_all': {
        console.log('delete all');
        break;
      }
      case 'add': {
        console.log('add');
        break;
      }
    }
  };
}
