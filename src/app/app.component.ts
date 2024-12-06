import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header>
        <nav class="sticky-top p-3 mb-3 border-bottom border-body" style="background-color: #ffffff;">
        <div class="container">
          <!-- Logo -->
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a routerLink="" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
              <img class="shadow d-inline-block align-text-top me-3 rounded-circle" src="./assets/Every logo1.png" width="50" height="50">
            </a>
            <!-- menu -->
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 nav-underline">
              <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <a routerLink="" class="nav-link px-2 link-body-emphasis">
                  <i class="fa-solid fa-house"></i> HOME
                </a>
              </li>
              <li routerLinkActive="active">
                <a routerLink="/hotel" class="nav-link px-2 link-body-emphasis">
                  <i class="fa-solid fa-hotel"></i> HOTEL
                </a>
              </li>
            </ul>

            <!-- Currency -->
            <div class="dropdown text-end">
              <a href="#" class="col-2 d-block link-body-emphasis text-decoration-none dropdown-toggle me-4" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png" alt="flag" width="32" height="32" class="rounded-circle shadow"> THB
              </a>
              <ul class="dropdown-menu text-small">
                <li><a class="dropdown-item" href="#">THB</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav> 

      </header>
      <!-- เนื้อหา -->
      <section class="content">
        
        <router-outlet></router-outlet>
      </section>

      <section>
        <!-- Footer -->
        <h6 class="border-bottom"></h6>
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
            <div class="col-md-4 d-flex align-items-center">
              <a routerLink="" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <img src="https://th.bing.com/th/id/OIP.9SmZ8rqMhIoMSnZ5_zK3LgHaFj?rs=1&pid=ImgDetMain" class="me-2 rounded-circle shadow" width="40" height="40">
              </a>
              <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="nav-item"><a routerLink="" class="nav-link px-2 text-body-secondary">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
            </ul>

          </footer>
        </div>
      </section>

    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = 'homes';
}
