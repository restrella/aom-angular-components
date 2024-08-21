import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.sass'],
})
export class ParentTwoComponent {
  dataToDisplay = [
    { name: 'bookblog1', desc: 'bookblogdesc1' },
    { name: 'bookblog2', desc: 'bookblogdesc2' },
  ];

  buttons = [{ label: 'Own Button', action: 'ownAction' }];

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
      }
    }
  };
}
