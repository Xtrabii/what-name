import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;


  // Form Data
  firstName: string = '';
  lastName: string = '';
  checkinDate: string = '';
  stayDuration: number = 1;
  checkoutDate: string = '';
  paymentMethod: string = '';
  totalPrice: number = 0;
  vat: number = 0;
  grandTotal: number = 0;

  // View Control
  showInfoForm = true;
  showCheckoutForm = false;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(
      housingLocationId
    );
  }

  // คำนวณวันที่ Check-out
  calculateCheckoutDate(): void {
    if (this.checkinDate && this.stayDuration) {
      const checkin = new Date(this.checkinDate);
      checkin.setDate(checkin.getDate() + this.stayDuration);
      this.checkoutDate = checkin.toISOString().split('T')[0];
    }
  }

  // ไปที่หน้าชำระเงิน
  goToCheckout(): void {
    if (this.housingLocation) {
      this.totalPrice = this.stayDuration * this.housingLocation.price;
      this.vat = this.totalPrice * 0.07;
      this.grandTotal = this.totalPrice + this.vat;

      this.showInfoForm = false;
      this.showCheckoutForm = true;
    }
  }

  // ย้อนกลับไปที่ฟอร์มข้อมูล
  goBackToInfoForm(): void {
    this.showCheckoutForm = false;
    this.showInfoForm = true;
  }

  // ชำระเงิน
  pay(): void {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Grand Total: ${this.grandTotal} THB`);

    alert(`Payment successful! Grand Total: ${this.grandTotal} THB.`);
    this.resetForm();
  }

  // Reset Form
  resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.checkinDate = '';
    this.stayDuration = 1;
    this.checkoutDate = '';
    this.paymentMethod = '';
    this.totalPrice = 0;
    this.vat = 0;
    this.grandTotal = 0;

    this.showInfoForm = true;
    this.showCheckoutForm = false;
  }
}
