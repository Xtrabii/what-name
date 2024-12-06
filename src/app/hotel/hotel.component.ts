import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <div class="container px-6 py-6">
    <section>
  
    </section>
    <section>
    <br><br>
      <!-- Search Hotel -->
      <div class="input-group rounded col-6">
        <input type="search " class="form-control rounded" placeholder="Search Hotel" aria-label="Search" aria-describedby="search-addon" #filter>
        <button class="input-group-text border-0" id="search-addon" (click)="filterResults(filter.value)">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </section>
    <section class="results">
      <app-housing-location 
      *ngFor="let housingLocation of filteredLocationList" 
      [housingLocation]="housingLocation">
    </app-housing-location>
    </section>
  </div>
  `,
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList:Housinglocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
