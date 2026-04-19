import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideBundleModule } from '../lucide-bundle.module';
import { GardenSectionId } from '../section-flowers';

@Component({
  selector: 'app-portfolio-sections',
  standalone: true,
  imports: [CommonModule, LucideBundleModule],
  templateUrl: './portfolio-sections.component.html',
})
export class PortfolioSectionsComponent {
  @Input({ required: true }) section!: GardenSectionId;
}
