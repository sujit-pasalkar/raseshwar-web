import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerComponent } from '../banner/banner.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { ProductsComponent } from '../products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { Whoweare } from '../whoweare/whoweare';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, BannerComponent, 
    ServicesComponent, AboutComponent, ProductsComponent, FooterComponent,TopbarComponent,
    Whoweare
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

   router = inject(Router);

   navClick() {
    this.router.navigate(['/about']);
   }
}
