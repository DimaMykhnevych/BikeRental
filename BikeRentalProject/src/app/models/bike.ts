export interface IBike {
  name: string;
  type: string;
  src: string;
  businessDays: {
    oneHour: number;
    threeHours: number;
    day: number;
    fullDay: number;
  };
  holidays: {
    oneHour: number;
    threeHours: number;
    day: number;
    fullDay: number;
  };
}
