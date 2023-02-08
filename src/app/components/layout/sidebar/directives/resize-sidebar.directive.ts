import {
  Directive,
  AfterViewInit,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { SidebarConstants } from '../services/sidebar.constants';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appResizeSidebar]',
})
export class ResizeSidebarDirective implements AfterViewInit, OnDestroy {
  sideBar: HTMLElement = null;
  sub: Subscription;

  // Width Breakpoints
  mobileBreakpoint = 768;
  mobileTwoBreakpoint = 900;
  desktopBreakpoint = 1023;

  constructor(
    private elemRef: ElementRef,
    private sidebarService: SidebarService
  ) {}

  ngAfterViewInit() {
    this.sideBar = this.elemRef.nativeElement;

    this.sub = this.sidebarService.resizeSidebar$
      .pipe(distinctUntilChanged()) // Resize only when change to a different status
      .subscribe((resize: boolean) => {
        this.onResizeSidebar(resize);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private onResizeSidebar(resize: boolean) {
    this.sideBar.style.width = resize ? SidebarConstants.WIDTH_RESIZED : null;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (
      event.target.innerWidth <= this.desktopBreakpoint &&
      event.target.innerWidth > this.mobileBreakpoint
    ) {
      this.sidebarService.onResize(true);
    } else if (event.target.innerWidth <= this.mobileBreakpoint) {
      this.sidebarService.onResize(false);
    }
  }
}
