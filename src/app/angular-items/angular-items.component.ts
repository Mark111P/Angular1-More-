import { Component, OnInit } from '@angular/core';
import { AngularItem } from '../angular-item';

@Component({
  selector: 'app-angular-items',
  standalone: true,
  imports: [],
  templateUrl: './angular-items.component.html',
  styleUrl: './angular-items.component.css'
})
export class AngularItemsComponent implements OnInit
{
    angularItem: AngularItem = 
    {
        id: 1,
        name: "Call Joe",
        isComplete: false
    };
    constructor(){}
    ngOnInit(): void {}
}