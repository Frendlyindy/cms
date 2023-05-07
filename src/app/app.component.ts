import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cms';

  loadedFeature: String = 'documents';

  onNavigate(feature: String) {
    this.loadedFeature = feature;
  }
}
