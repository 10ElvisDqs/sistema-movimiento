import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-propuesta-card',
  templateUrl: './propuesta-card.component.html',
  styleUrl: './propuesta-card.component.css'
})
export class PropuestaCardComponent {
    @Input() category: string = '';
    @Input() imageSrc: string = '';
    @Input() title: string = '';
    @Input() proposals: string[] = [];
}
