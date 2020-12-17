import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { IBike } from '../models/bike';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BikeTypeMapper } from '../mappers/bike-mapper';
import { MatOption } from '@angular/material/core';
import { bikes } from '../bikes';

@Component({
  selector: 'app-bike-view',
  templateUrl: './bike-view.component.html',
  styleUrls: ['./bike-view.component.css'],
})
export class BikeViewComponent implements OnInit {
  public bikes: IBike[];
  public filterBikes: IBike[] = bikes;
  public startPrice: number = 0;
  public endPrice: number = Number.MAX_SAFE_INTEGER;
  selectedBikeType: string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  public div = document.querySelector('.container') as HTMLElement;

  constructor(private service: BikesService, private router: Router) {}

  ngOnInit(): void {
    this.bikes = this.service.getAllBykes();
    this.getBikeTypes();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        this.selectedBikeType = value;
        if (this.selectedBikeType === '') {
          this.filterBikes = this.bikes;
        }
        return this._filter(value);
      })
    );
  }

  public onChangeType(option: MatOption) {
    const type = BikeTypeMapper.getTypeByValue(option.value);
    this.filterBikes = this.bikes.filter((b) => b.type === type);
  }

  public onStartPriceInput(price: string) {
    let money = Number(price);
    this.startPrice = money;
    if (this.startPrice === 0) {
      this.filterBikes = this.bikes;
      return;
    }

    this.filterBikes = this.bikes.filter(
      (b) =>
        b.businessDays.oneHour >= money &&
        b.businessDays.oneHour <= this.endPrice
    );
  }

  public onEndPriceInput(price: string) {
    let money = Number(price);
    this.endPrice = money;
    if (this.endPrice === 0) {
      this.filterBikes = this.bikes;
      this.endPrice = Number.MAX_SAFE_INTEGER;
      return;
    }
    this.filterBikes = this.bikes.filter(
      (b) =>
        b.businessDays.oneHour >= this.startPrice &&
        b.businessDays.oneHour <= this.endPrice
    );
  }

  public getDisplayedType(type: string): string {
    return BikeTypeMapper.getBikeType(type);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private getBikeTypes(): void {
    this.options = this.bikes.map((b) => b.type);
  }

  public onMoreButtonClick(bikeType: string): void {
    this.router.navigate(['/bikeInfo'], {
      queryParams: {
        type: bikeType,
      },
    });
  }
}
