import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../utility/utility.service';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public cdaApparel: any;

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.getAppearl();
  }

  public getAppearl(): void {
    this.utilityService.getByUrl('api/cda/shop').pipe().subscribe((DATA: any) => {
      console.log('Shop apparel', DATA);
      this.cdaApparel = DATA;
    });
  }

}
