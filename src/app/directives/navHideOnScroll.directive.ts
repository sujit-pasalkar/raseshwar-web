// import { Directive, ElementRef, HostBinding, HostListener, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { map, pairwise, throttleTime, takeUntil, startWith } from 'rxjs/operators';

@Directive({
  selector: '[navHideOnScroll]',
  standalone: true,
})
export class  NavHideOnScrollDirective implements OnInit, OnDestroy {
  //   private lastScrollTop = 0;
  //   private readonly scrollThreshold = 20;

  //   @HostBinding('style.transition') transition = 'transform 240ms ease-in-out';
  //   @HostBinding('style.transform') transform = 'translateY(0)';

  //   constructor(
  //     private readonly elementRef: ElementRef<HTMLElement>,
  //     @Inject(DOCUMENT) private readonly document: Document
  //   ) {}

  //   @HostListener('window:scroll')
  //   onWindowScroll(): void {
  //     const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop || 0;

  //     if (scrollTop > this.lastScrollTop && scrollTop > this.scrollThreshold) {
  //       this.transform = 'translateY(-100%)';
  //     } else {
  //       this.transform = 'translateY(0)';
  //     }

  //     this.lastScrollTop = Math.max(scrollTop, 0);
  //   }

  private destroy$ = new Subject<void>();
  private lastScrollTop = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    console.log('innn');
    
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(50, undefined, { leading: true, trailing: true }),
        map(() => window.scrollY),
        startWith(0),
        pairwise(),
        takeUntil(this.destroy$),
      )
      .subscribe(([prev, curr]) => {
        if (curr < 50) {
          this.show();
          return;
        }

        if (curr > prev) {
          // scrolling DOWN
          this.hide();
        } else {
          // scrolling UP
          this.show();
        }
      });
  }

  private hide(): void {
    this.renderer.addClass(this.el.nativeElement, 'header-hidden');
  }

  private show(): void {
    this.renderer.removeClass(this.el.nativeElement, 'header-hidden');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
