import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: ` <div class="centered">
    <h2 class="md">{{ product.title }}</h2>
    <br />
    <img [src]="product.image" [alt]="product.title" />
    <p>{{ product.text }}</p>
    <p>{{ product.time }}</p>
    <a [href]="product.link" target="_blank">Посмотреть курс</a>
  </div>`,
})
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct;

  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = products.getById(id);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }
  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
}
