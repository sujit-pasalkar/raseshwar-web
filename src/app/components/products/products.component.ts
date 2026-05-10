import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  price: number;
  offer: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class ProductsComponent {
  @Input() preview = false;

  whatsappNumber = '917040470678';
  searchText = '';
  priceFilter = 'all';
  offerFilter = 'all';

  products: Product[] = [
    {
      id: 1,
      name: 'Chavanprash',
      image: '/chavanprash.jpg',
      originalPrice: 200,
      price: 150,
      offer: 30
    },
    {
      id: 2,
      name: 'Black Organic Tea',
      image:
        'https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/product-img1.png',
      originalPrice: 100,
      price: 50,
      offer: 30
    },
    {
      id: 3,
      name: 'Black Organic Tea',
      image:
        'https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/product-img1.png',
      originalPrice: 100,
      price: 50,
      offer: 30
    },
    {
      id: 4,
      name: 'Chavanprash',
      image: '/chavanprash.jpg',
      originalPrice: 200,
      price: 150,
      offer: 30
    },
    {
      id: 5,
      name: 'Black Organic Tea',
      image:
        'https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/product-img1.png',
      originalPrice: 100,
      price: 50,
      offer: 30
    },
    {
      id: 6,
      name: 'Black Organic Tea',
      image:
        'https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/product-img1.png',
      originalPrice: 100,
      price: 50,
      offer: 30
    },
    {
      id: 7,
      name: 'Chavanprash',
      image: '/chavanprash.jpg',
      originalPrice: 200,
      price: 150,
      offer: 30
    },
    {
      id: 8,
      name: 'Black Organic Tea',
      image:
        'https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/product-img1.png',
      originalPrice: 100,
      price: 50,
      offer: 30
    },
    {
      id: 9,
      name: 'Black Organic Tea',
      image:
        'https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/product-img1.png',
      originalPrice: 100,
      price: 50,
      offer: 30
    },
    {
      id: 10,
      name: 'Chavanprash',
      image: '/chavanprash.jpg',
      originalPrice: 200,
      price: 150,
      offer: 30
    }
  ];

  get visibleProducts(): Product[] {
    if (this.preview) {
      return this.products.slice(0, 3);
    }

    const search = this.searchText.trim().toLowerCase();

    return this.products.filter((product) => {
      const matchesSearch = !search || product.name.toLowerCase().includes(search);
      const matchesPrice = this.matchesPriceFilter(product.price);
      const matchesOffer = this.offerFilter === 'all' || product.offer >= Number(this.offerFilter);

      return matchesSearch && matchesPrice && matchesOffer;
    });
  }

  orderNow(productName: string, price: number) {
    const displayPrice = `Rs. ${price}`;
    const message = `Hi, I am interested in ordering ${productName} priced at ${displayPrice}. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    console.log(url);
    
    window.open(url,'_blank');
  }

  private matchesPriceFilter(price: number): boolean {
    if (this.priceFilter === 'under100') {
      return price < 100;
    }

    if (this.priceFilter === '100to200') {
      return price >= 100 && price <= 200;
    }

    if (this.priceFilter === 'above200') {
      return price > 200;
    }

    return true;
  }
}
