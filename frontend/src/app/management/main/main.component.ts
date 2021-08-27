import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menuButtons: MenuButton[];
  changeButton(index: number): void {
    this.menuButtons.forEach(button => {
      button.isSelected = false;
    })
    this.menuButtons[index].isSelected = true;
  } 
  constructor() { 
    this.menuButtons = [
      {
        text: "Dashboard",
        destination: "",
        isSelected: true
      },
      {
        text: "Schools",
        destination: "schools",
        isSelected: false
      },
    ]
  }
  ngOnInit(): void {

  }
}
interface MenuButton {
  text: string,
  destination: string
  isSelected: boolean
}
