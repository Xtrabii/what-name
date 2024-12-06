import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { HotelComponent } from "./hotel/hotel.component";
import { FormComponent } from "./form/form.component";

const routeConfig : Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page',
    },
    {
        path: 'hotel',
        component: HotelComponent,
        title: 'Hotel Page',
    },
    {
        path: 'form/:id',
        component: FormComponent,
        title: 'Form Page',
    },
];

export default routeConfig;