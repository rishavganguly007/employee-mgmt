import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';
import { OrderComponent } from './order/order.component';
import { Plant } from './plant';
import { Planter } from './planter';
import { Seed } from './seed';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  seedItems: Seed[] = [];
  plantItems: Plant[] = [];
  planterItems: Planter[] = [];

  seedSum: number=1;
  plantSum: number=1;
  planterSum: number=1;

  seedTotal: number=1;
  plantTotal: number=1;
  planterTotal: number=1;
  totalPrice: number=1;

  seedItemQuantity: number =1;
  plantItemQuantity: number = 1;
  planterItemQuantity: number = 1;
  
  order = {} as Order; 

  constructor(private orderService : OrderService) {}
  
  
/*.......Seed............... */
  addSeedToCart(seed: Seed) {
    this.seedItems.push(seed);
  }
  getSeedItems() {
    return this.seedItems;
  }
  

  /*.......Plant............... */
  addPlantToCart(plant: Plant) {
    this.plantItems.push(plant);
  }
  getPlantItems(){
    return this.plantItems;
  }


  /*.......Planter............... */
  addPlanterToCart(planter: Planter) {
    this.planterItems.push(planter);
  }
  getPlanterItems(){
    return this.planterItems;
  }
  
  /*.......Common Operations............... */
  clearCart() {
    this.seedItems = [];
    this.plantItems = [];
    this.planterItems = [];
    
    this.getPlantItems();
    this.getPlanterItems();
    this.getSeedItems();
  }
  
  /*.......Order Operations............... */

  onClickCheckout(order: Order): void{
    
    this.order.seedQuantity = order.seedQuantity
    this.order.plantQuantity = order.plantQuantity
    this.order.planterQuantity = order.planterQuantity
    this.order.totalCost = order.totalCost;
    this.order.planters = order.planters
    console.log("cart Service" +  this.order.plantQuantity);
    this.orderService.setOrder(this.order);
  }

}
