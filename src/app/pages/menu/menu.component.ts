import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: OrderDetailsService) {}

  displayFood : any = [];

  ngOnInit(): void {
    this.foodSelection();
  }


  foodSelection() {
    this.service.foodService().subscribe((data) => {
      console.log(data);
      this.displayFood = data. categories;
    })
  }

}
