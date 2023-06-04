import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk','She Hulk', 'Thor'];

  public deleteHero?: string;

  public removeLastHero(): void{
    this.deleteHero = this.heroNames.pop();
   
  }

}
