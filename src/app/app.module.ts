import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { BlogModule } from './blog/blog.module';
import { ToDoModule } from './toDo/to-do.module';
import { UsersModule } from './users/users.module';
import { ShopModule } from './shop/shop.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    BlogModule,
    ToDoModule,
    UsersModule,
    ShopModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
