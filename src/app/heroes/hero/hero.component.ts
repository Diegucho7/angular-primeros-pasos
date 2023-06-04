import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  template: `
  <button (click)= "changeHero">Cambiar nombre</button>
  `
 

})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name. toUpperCase();
    
  }

 public getHeroDescription():string{
    
    return `${ this.name } - ${ this.age }`;
  }
  changeHero():void{
    this.name= 'Spiderman'
  }

  changeAge():void{
    this.age= 25;
  }
  resetForm():void{
    this.name = "Ironman";
    this.age = 45;
  }
}
