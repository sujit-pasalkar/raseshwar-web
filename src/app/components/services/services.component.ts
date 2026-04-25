import { Component, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  responsiveOptions: any[] | undefined;
  products = signal<{ imageId: string; name: string }[]>([]);

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

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
      // {
      //   imageId: 'care-img8',
      //   name: 'Urinary Disorder / Urinary Disease',
      // },
      // {
      //   imageId: 'care-img8',
      //   name: 'Kidney Disorders',
      // },
      // {
      //   imageId: 'obesity_cartoon_edited',
      //   name: 'Obesity',
      // }
    ]);
  }
}
