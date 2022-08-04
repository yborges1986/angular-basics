import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {

  @Input() newCaracter: Character = {
    name: '',
    power: 0
  }
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  Add(): void {
    console.log("entreeeeeeee");
    if (this.newCaracter.name.trim().length === 0) {
      return;
    }
    // this.onNewCharacter.emit(this.newCaracter)
    this.dbzService.addCharacter(this.newCaracter)
    this.newCaracter = {
      name: "",
      power: 0
    }

  }
  constructor(private dbzService: DbzService) {

  }
}
