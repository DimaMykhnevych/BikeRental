import { Injectable } from '@angular/core';
import { bikes } from './bikes';
import { IBike } from '../app/models/bike';
import { bikeTextInfo } from './bike-text-info';

@Injectable({
  providedIn: 'root',
})
export class BikesService {
  constructor() {}

  public getAllBykes(): IBike[] {
    return bikes;
  }

  public getBikesInfo() {
    return bikeTextInfo;
  }
}
