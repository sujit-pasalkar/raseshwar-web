import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'banner', component: BannerComponent },
    { path: 'topbar', component: TopbarComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'footer', component: FooterComponent },
    { path: '**', redirectTo: '' }
];

                                                                                