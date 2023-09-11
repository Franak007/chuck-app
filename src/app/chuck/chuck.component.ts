import { Component } from '@angular/core';
import {JokeInterface} from "../joke.interface";

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent {

  joke: JokeInterface;



}
