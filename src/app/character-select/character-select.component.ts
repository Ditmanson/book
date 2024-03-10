import { Component } from '@angular/core';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent {
  selectedCharacter: any;
  selectedBackground: any;
  showCard = false;
  cardTitle = '';

  characters = [
    { name: 'Cat', image: '/assets/images/characters/cat.png' },
    { name: 'Dog', image: '/assets/images/characters/dog.png' },
    { name: 'Bear', image: '/assets/images/characters/bear.png' },
    { name: 'Rabbit', image: '/assets/images/characters/rabbit.png' }
  ];
  backgrounds = [
    { name: 'Forest', image: '/assets/images/backgrounds/forest.png' },
    { name: 'City', image: '/assets/images/backgrounds/city.png' },
    { name: 'Boat', image: '/assets/images/backgrounds/boat.png' },
  ]


  getParsedCharacter() {
    return JSON.parse(this.selectedCharacter);
  }
}
