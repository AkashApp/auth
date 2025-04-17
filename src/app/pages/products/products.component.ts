import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/api/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getAllProducts().subscribe(res => {
      this.products = res.products;
      console.log(this.products);
    });
  }

  sortPrice(order: 'asc' | 'desc') {
    const sorted = [...this.products].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    this.products = sorted;
  }
}
