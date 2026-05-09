import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit, OnDestroy {
  products = signal<{ imageId: string; name: string }[]>([]);
  currentIndex = signal(0);
  itemsPerView = signal(6); // Default for desktop

  ngOnInit() {
    this.products.set([
      {
        imageId: 'care-img1',
        name: 'Eye care',
      },
      {
        imageId: 'care-img2',
        name: 'Hair Care',
      },
      {
        imageId: 'care-img3',
        name: 'Skin Care',
      },
      {
        imageId: 'care-img5',
        name: "Women's Health",
      },
      {
        imageId: 'mens-health',
        name: "Men's Health",
      },
      {
        imageId: 'care-img6',
        name: 'Memory Health',
      },
      {
        imageId: 'care-img7',
        name: 'Skin Care',
      },
    ]);

    this.updateItemsPerView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerView();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  updateItemsPerView() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 575) {
        this.itemsPerView.set(1);
      } else if (width <= 767) {
        this.itemsPerView.set(2);
      } else if (width <= 1199) {
        this.itemsPerView.set(4);
      } else if (width <= 1400) {
        this.itemsPerView.set(5);
      } else {
        this.itemsPerView.set(6);
      }
    }
  }

  next() {
    const maxIndex = Math.max(0, this.products().length - this.itemsPerView());
    if (this.currentIndex() < maxIndex) {
      this.currentIndex.set(this.currentIndex() + 1);
    }
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.set(this.currentIndex() - 1);
    }
  }

  getIndicatorIndexes(): number[] {
    const pageCount = Math.max(1, Math.ceil(this.products().length / this.itemsPerView()));
    return Array.from({ length: pageCount }, (_, index) => index);
  }

  goToIndex(index: number) {
    this.currentIndex.set(index);
  }
}
