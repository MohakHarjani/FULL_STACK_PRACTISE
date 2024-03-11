import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-driven-container',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './template-driven-container.component.html',
  styleUrl: './template-driven-container.component.css'
})
export class TemplateDrivenContainerComponent {

}
