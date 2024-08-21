import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './pages/parent/parent.component';
import { ParentTwoComponent } from './pages/parent-two/parent-two.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
  {
    path: 'book-blog',
    component: ParentTwoComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
