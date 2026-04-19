import { Component, NgZone, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { LucideBundleModule } from './lucide-bundle.module';
import { GardenFlowerComponent } from './garden-flower/garden-flower.component';
import { PortfolioSectionsComponent } from './portfolio-sections/portfolio-sections.component';
import { GARDEN_FLOWERS, GardenFlowerMeta, GardenSectionId } from './section-flowers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, LucideBundleModule, GardenFlowerComponent, PortfolioSectionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly title = 'portfolio';

  readonly flowers = GARDEN_FLOWERS;

  /** Home garden vs full-page section */
  viewMode: 'garden' | 'section' = 'garden';
  activeSection: GardenSectionId | null = null;
  transitioning = false;

  isDark = false;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly ngZone = inject(NgZone);

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }
    const stored = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark = stored === 'dark' || (stored === null && prefersDark);
    this.applyTheme();
  }

  get activeFlower(): GardenFlowerMeta | undefined {
    return GARDEN_FLOWERS.find((f) => f.id === this.activeSection);
  }

  toggleTheme(): void {
    if (!this.isBrowser) {
      return;
    }
    this.isDark = !this.isDark;
    localStorage.setItem('portfolio-theme', this.isDark ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  async onFlowerPick(event: { id: GardenSectionId; el: HTMLElement }): Promise<void> {
    if (!this.isBrowser || this.transitioning) {
      return;
    }
    this.transitioning = true;
    const { id, el } = event;
    const petals = el.querySelector('.petals');
    const inner = el.querySelector('.flower-bloom-inner');

    const gsap = (await import('gsap')).gsap;

    const tl = gsap.timeline();

    if (petals) {
      gsap.set(petals, { transformOrigin: 'center center', scale: 0.28, rotation: -10 });
      tl.to(petals, { scale: 1, rotation: 0, duration: 0.44, ease: 'power2.out' }, 0);
    }
    if (inner) {
      gsap.set(inner, { transformOrigin: 'center center', scale: 0.68 });
      tl.to(inner, { scale: 1, duration: 0.3, ease: 'power2.out' }, 0.1);
    }
    // Let the selected bloom fill the entire screen before route-like swap.
    tl.to(
      el,
      {
        scale: 22,
        duration: 0.8,
        ease: 'power2.inOut',
        transformOrigin: '50% 50%',
      },
      '-=0.04',
    );
    // Tiny hold at full bloom for a clean handoff.
    tl.to({}, { duration: 0.06 });

    tl.eventCallback('onComplete', () => {
      this.ngZone.run(() => {
        this.activeSection = id;
        this.viewMode = 'section';
        this.transitioning = false;
        window.scrollTo(0, 0);
      });
    });
  }

  backToGarden(): void {
    this.viewMode = 'garden';
    this.activeSection = null;
  }
}
