import { Injectable } from "@angular/core";
import { Character } from "../interfaces/interface";

@Injectable()
export class DbzService {
    constructor() {
    }

    private _listCharacter: Character[] = [{
        name: "Goku",
        power: 15000
    },
    {
        name: "Vegueta",
        power: 2000
    }];


    public get listCharacters(): Character[] {
        return [...this._listCharacter];
    }

    addCharacter(character: Character): void {
        this._listCharacter.push(character)
    }
}