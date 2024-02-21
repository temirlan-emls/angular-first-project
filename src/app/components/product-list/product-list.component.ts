import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>

    <ul class="products">
      @for (product of products; track product.id) {
      <li class="product-id" [routerLink]="'/product/' + product.id">
        <div class="product-image">
          <img [src]="product.image" [alt]="product.title" />
        </div>
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <p class="hint">{{ product.text }}</p>
          <p class="hint">{{ product.time }}</p>
        </div>
      </li>
      }
    </ul>
  `,
})
export class ProductListComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: IProduct[];
}
