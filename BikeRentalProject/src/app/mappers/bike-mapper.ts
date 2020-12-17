export class BikeTypeMapper {
  public static typeDictionary = {
    city: 'Городской',
    mountain: 'Горный',
    crousier: 'Круизер',
    child: 'Детский',
    fatbike: 'ФэтБайк',
    profi: 'Профессиональный',
    tandem: 'Тандем',
    threeWheels: 'Трехколесный',
  };
  public static getBikeType(type: string): string {
    return this.typeDictionary[type];
  }
  public static getTypeByValue(value: string): string {
    return Object.keys(BikeTypeMapper.typeDictionary).find(
      (key) => BikeTypeMapper.typeDictionary[key] === value
    );
  }
}
