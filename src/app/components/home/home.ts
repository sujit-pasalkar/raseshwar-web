import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, CarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnInit {
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  @ViewChild('line1') l1!: ElementRef;
  @ViewChild('line2') l2!: ElementRef;
  @ViewChild('line3') l3!: ElementRef;

  // btn = document.getElementById('menuBtn');
  // sidebar = document.getElementById('sidebar');
  // overlay = document.getElementById('overlay');

  // l1 = document.getElementById('line1');
  // l2 = document.getElementById('line2');
  // l3 = document.getElementById('line3');

  open = false;
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
        numVisible: 6,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 3,
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
        name: "Liver Disorders",
      },
      {
        imageId: 'mens-health',
        name: "Heart Disease",
      },
      {
        imageId: 'care-img6',
        name: 'Memory Health',
      },
      {
        imageId: 'care-img7',
        name: 'Diabetes',
      },
      {
        imageId: 'care-img8',
        name: 'Urinary Disorder / Urinary Disease',
      },
      {
        imageId: 'care-img8',
        name: 'Kidney Disorders',
      },
      {
        imageId: 'care-img8',
        name: 'Obesity',
      }
    ]);
  }

  ngAfterViewInit() {}

  toggleSidebar() {
    this.menuBtn.nativeElement.addEventListener('click', () => {
      this.open = !this.open;

      if (this.open) {
        // sidebar open
        this.sidebar.nativeElement.style.left = '0px';
        // this.overlay.nativeElement.classList.remove('hidden');

        // animate to close icon
        this.l1.nativeElement.style.transform = 'rotate(45deg)';
        this.l1.nativeElement.style.top = '16px';
        this.l2.nativeElement.style.opacity = '0';

        this.l3.nativeElement.style.transform = 'rotate(-45deg)';
        this.l3.nativeElement.style.top = '16px';
      } else {
        // sidebar close
        this.sidebar.nativeElement.style.left = '-260px';
        // this.overlay.nativeElement.classList.add('hidden');
        // back to hamburger
        this.l1.nativeElement.style.transform = 'rotate(0)';
        this.l1.nativeElement.style.top = '8px';

        this.l2.nativeElement.style.opacity = '1';

        this.l3.nativeElement.style.transform = 'rotate(0)';
        this.l3.nativeElement.style.top = '24px';
      }
    });
  }
}
