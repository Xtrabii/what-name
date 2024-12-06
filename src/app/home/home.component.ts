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
    <h1 style="color: #235eff;"><i class= ></i> Welcome to Goodbye World </h1>
    <h4 class=><i class= ></i> TAKE THE WORLD WITH YOU </h4>
    <br>
      <!-- Search Hotel -->
      <div class="input-group rounded col-6">
        <input type="search " class="form-control rounded" placeholder="Search Hotel" aria-label="Search" aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </section>
    <section class="results">
      <app-housing-location 
      *ngFor="let housingLocation of housingLocationList" 
      [housingLocation]="housingLocation">
    </app-housing-location>
    </section>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList : Housinglocation[] =[];
  housingService : HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
