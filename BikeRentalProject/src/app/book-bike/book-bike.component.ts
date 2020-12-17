import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BikesService } from '../bikes.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-book-bike',
  templateUrl: './book-bike.component.html',
  styleUrls: ['./book-bike.component.css'],
})
export class BookBikeComponent implements OnInit {
  bikeTypes: string[];

  ngOnInit(): void {}
  public getAllBikeTypes(): string[] {
    let types = this.service.getAllBykes().map((b) => b.type);
    console.log(types);
    return types;
  }
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      fieldGroup: [
        {
          templateOptions: { label: 'Персональные данные' },
          fieldGroup: [
            {
              key: 'firstname',
              type: 'input',
              templateOptions: {
                label: 'ФИО',
                required: true,
              },
            },
            {
              key: 'age',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Возраст',
                required: true,
                min: 18,
              },
            },
            {
              key: 'email',
              type: 'input',
              templateOptions: {
                label: 'Электронная почта',
                required: true,
                pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Дополнительная информация' },
          fieldGroup: [
            {
              key: 'address',
              type: 'input',
              templateOptions: {
                label: 'Адрес точки бронирования',
                required: true,
              },
            },
            {
              key: 'tripDay',
              type: 'input',
              templateOptions: {
                type: 'datetime-local',
                label: 'Дата и время проката',
                required: true,
              },
            },
            {
              key: 'trip-duration',
              type: 'select',
              templateOptions: {
                label: 'Продолжительность поездки',
                required: true,
                options: [
                  { duration: '1 час' },
                  { duration: '3 часa' },
                  { duration: '12 часов' },
                  { duration: 'сутки' },
                ],
                labelProp: 'duration',
                valueProp: 'duration',
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Бронирование велосипеда' },
          fieldGroup: [
            {
              key: 'bike-type',
              type: 'select',
              defaultValue: [],
              templateOptions: {
                options: this.service.getAllBykes(),
                label: 'Выберите тип велосипеда',
                labelProp: 'name',
                valueProp: 'type',
                required: true,
              },
            },
            {
              key: 'helmet',
              type: 'checkbox',
              templateOptions: {
                label: 'Наличие шлема (бесплатно)',
              },
            },
          ],
        },
      ],
    },
  ];
  constructor(
    private service: BikesService,
    private notifiation: NotificationService,
    private router: Router
  ) {}
  submit() {
    // alert(JSON.stringify(this.model));
    this.notifiation.showSuccess(
      'Бронь велосипеда прошла успешно, вам на почту было отправлено подтверждение!',
      'Бронирование велосипеда',
      5000
    );
    this.router.navigate(['/home']);
  }
}
