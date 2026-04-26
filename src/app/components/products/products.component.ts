import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: []
})
export class ProductsComponent {
  whatsappNumber = '917040470678';

  orderNow(productName: string, price: string) {
    const message = `Hi, I am interested in ordering ${productName} priced at ${price}. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    console.log(url);
    
    window.open(url,'_blank');
  }
}
