import {Goods} from '../goods';
import { Injectable } from '@angular/core';
@Injectable({
providedIn:'root'
})
export class Bookservice{
  getAll():Goods[]{
    return[
      {
        id:1,
        name:'Loren',
        imageUrl:'../image/Loren.webp'
      },
      {
        id:2,
        name:'Witcher',
        imageUrl:'../image/Witcher.webp'
      },
      {
        id:3,
        name:'Sherlok',
        imageUrl:'../image/Sherlok.webp'
      },
    ]
  }

  getGoodsById(id:number):Goods{return this.getAll().find(goods=>goods.id==id)!;}
}

