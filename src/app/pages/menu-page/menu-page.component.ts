import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {


  selectedData = "";

  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService) {}

  getMenuId: any;
  menuData: any;

  allData: [] = [];

  async ngOnInit() {
    await this.service.foodService().toPromise().then((data) => {
      console.log(data);
      this.allData =  data.categories;
      console.log(data.categories);

    })

    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');

      if(this.getMenuId) {
          this.allData.filter( (item: any) => {
            console.log(item)
            if(item.idCategory == this.getMenuId){
              this.selectedData = item.strCategoryDescription;
            }
          });
        }
  }
}
