import { Component } from '@angular/core';
import { Character } from '../interfaces/interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  newCaracter: Character = {
    name: '',
    power: 0
  }


  get listCharacter(): Character[] {
    return this.dbzService.listCharacters;
  }

  constructor(private dbzService: DbzService) {
  }

  // ngOnInit(): void {
  // }



}
