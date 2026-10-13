import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderComponent {

  onHomeClick(): void {
    const homeLink = document.getElementById('link-home');
    if (homeLink) {
      homeLink.click();
    }
  }

  onExperienciaClick(): void {
    const experienciaLink = document.getElementById('link-experiencia');
    if (experienciaLink) {
      experienciaLink.click();
    }
  }

  onCursosClick(): void {
    const cursosLink = document.getElementById('link-cursos');
    if (cursosLink) {
      cursosLink.click();
    }
  }
}
