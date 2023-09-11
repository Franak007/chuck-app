import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titleHome: string = "Chuck Norris"

  ngOnInit() {
    console.log("Le composant vient d'être chargé")
  }

}
