import { Component, OnInit } from '@angular/core';
import {Goods} from '../goods';
@Component({
  selector: 'app-goods',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class Goodsbk implements OnInit{
goods:Goods[]=[];
}

