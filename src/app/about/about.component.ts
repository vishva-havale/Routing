import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  selectedSection: string = 'mission';

  showSection(section: string) {
    this.selectedSection = section;
  }

}
