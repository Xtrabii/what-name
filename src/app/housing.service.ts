import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() {}

  // ดึงข้อมูลทั้งหมด
  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  // ดึงข้อมูลตาม ID
  async getHousingLocationById(id: Number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  // เพิ่มข้อมูลใหม่
  async addHousingLocation(location: Housinglocation): Promise<void> {
    await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    });
  }

  // แก้ไขข้อมูล
  async updateHousingLocation(id: Number, updatedLocation: Partial<Housinglocation>): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLocation),
    });
  }

  // ลบข้อมูล
  async deleteHousingLocation(id: Number): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
  }
}
