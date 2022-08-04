import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/interface';
import { DbzService } from '../services/dbz.service';
import { DbzModule } from '../dbz.module';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  // @Input() listCharacter: Character[] = [];

  get listCharacter() {
    return this.dbzService.listCharacters;
  }
  constructor(private dbzService: DbzService) {

  }
}
