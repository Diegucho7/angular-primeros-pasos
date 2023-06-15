import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';
import { dbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    @Input( )

    public characterList: Character[] = [{
      name: 'Trunks',
      power: 10 
    }];
    // onDelete = Index value: number
    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id?: string): void{
      if (!id) return;
      // console.log({id});
      // TODOS EMITIR EL ID DEL PERSONAJE
      this.onDelete.emit( id );
    }
    onNewCharacter(characters: Character){
      this.onNewCharacter(characters);
    }

}
