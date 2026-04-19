import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GardenSectionId } from '../section-flowers';

@Component({
  selector: 'app-garden-flower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garden-flower.component.html',
  styleUrl: './garden-flower.component.scss',
})
export class GardenFlowerComponent {
  @Input({ required: true }) sectionId!: GardenSectionId;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) accent!: string;
  @Input({ required: true }) imageSrc!: string;

  @Output() pick = new EventEmitter<{ id: GardenSectionId; el: HTMLElement }>();

  onClick(ev: Event): void {
    const el = ev.currentTarget as HTMLElement;
    this.pick.emit({ id: this.sectionId, el });
  }
}
