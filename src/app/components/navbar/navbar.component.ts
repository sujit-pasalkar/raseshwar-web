import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavHideOnScrollDirective } from '../../directives/navHideOnScroll.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavHideOnScrollDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  @ViewChild('line1') l1!: ElementRef;
  @ViewChild('line2') l2!: ElementRef;
  @ViewChild('line3') l3!: ElementRef;
  open = false;

  
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
