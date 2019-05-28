import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ToDoModule { }
