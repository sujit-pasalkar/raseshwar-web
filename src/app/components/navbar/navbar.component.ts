import { Component, ElementRef, ViewChild, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHideOnScrollDirective } from '../../directives/navHideOnScroll.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavHideOnScrollDirective, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  @ViewChild('line1') l1!: ElementRef;
  @ViewChild('line2') l2!: ElementRef;
  @ViewChild('line3') l3!: ElementRef;
  open = false;
  activeLink = signal<string>('home');

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.updateActiveLink());
  }

  private updateActiveLink(): void {
    const sections = ['home', 'about', 'services', 'products', 'contact'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if section is in viewport (top between -100 and window height)
        if (rect.top <= 150 && rect.bottom > 150) {
          this.activeLink.set(section);
          break;
        }
      }
    }
  }

  toggleSidebar() {
    console.log('in');

    this.open = !this.open;

    if (this.open) {
      // sidebar open
      this.sidebar.nativeElement.style.left = '0px';

      // animate to close icon
      this.l1.nativeElement.style.transform = 'rotate(45deg)';
      this.l1.nativeElement.style.top = '16px';
      this.l2.nativeElement.style.opacity = '0';

      this.l3.nativeElement.style.transform = 'rotate(-45deg)';
      this.l3.nativeElement.style.top = '16px';
    } else {
      // sidebar close
      this.sidebar.nativeElement.style.left = '-260px';
      // back to hamburger
      this.l1.nativeElement.style.transform = 'rotate(0)';
      this.l1.nativeElement.style.top = '8px';

      this.l2.nativeElement.style.opacity = '1';

      this.l3.nativeElement.style.transform = 'rotate(0)';
      this.l3.nativeElement.style.top = '24px';
    }
  }
}
