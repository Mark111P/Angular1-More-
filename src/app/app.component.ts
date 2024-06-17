import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularItemsComponent } from './angular-items/angular-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'angular';
}
