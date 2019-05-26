import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

pageTitle:string="List Of Players";

players:any[]=[
  {
    "Name":"Sachin Tendulkar",
    "Category":"Batsman",
    "Country":"India",
    "Runs":41000,
    "Wickets":201,
    "imageUrl":""
  },

  {
    "Name":"Joe Root",
    "Category":"Batsman",
    "Country":"England",
    "Runs":14000,
    "Wickets":0,
    "imageUrl":""
  },

  {
    "Name":"Hardik Pandya",
    "Category":"All Rounder",
    "Country":"India",
    "Runs":5000,
    "Wickets":45,
    "imageUrl":""
  },

  {
    "Name":"Lasith Malinga",
    "Category":"Bowler",
    "Country":"ShriLanka",
    "Runs":1500,
    "Wickets":298,
    "imageUrl":""
  },


]

  constructor() { }

  ngOnInit() {
  }

}
