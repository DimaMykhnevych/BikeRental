import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css'],
})
export class BikeInfoComponent implements OnInit {
  bikeType: string;
  bikeInfo;
  constructor(
    private route: ActivatedRoute,
    private service: BikesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.bikeType = params['type'];
      this.bikeInfo = this.service
        .getBikesInfo()
        .filter((b) => b.type === this.bikeType)[0];
    });
    console.log(this.bikeInfo);
  }

  public onBackBtnClick(): void {
    this.router.navigate(['/bikeView']);
  }
}
