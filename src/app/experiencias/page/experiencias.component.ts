import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-experiencias',
    templateUrl: './experiencias.component.html',
    styleUrls: ['./experiencias.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ExperienciasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
