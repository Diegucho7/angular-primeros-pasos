import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";
import { Character } from '../interfaces/character.interfaces';
import { DbzModule } from '../dbz.module';
import { dbzService } from '../services/dbz.service';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {

    constructor(private dbzService: dbzService){
        
    }

    get characters(): Character[]{
        return[...this.dbzService.characters];
    }
    onDeleteCharacter(id: string):void{
       this.dbzService.deleteCharacterById(id); 
    }
    onNewCharacter(characters:Character){
        this.dbzService.addCharacter(characters);
    }
}
