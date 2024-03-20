import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateDrivenContainerComponent } from "./components/template_driven/template-driven-container/template-driven-container.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, TemplateDrivenContainerComponent]
})
export class AppComponent {
  title = 'angular_spring_frontend';
}
