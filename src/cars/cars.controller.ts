import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars = [ 'Chevrolet', 'Tesla', 'Mclaren' ];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById( @Param('id') id: string ) {
    console.log({id})

    // const ID = parseInt(id);

    if (this.cars?.[id] === undefined) {
      return {'msg': 'Car not exist'}
    }
    return this.cars?.[id];
    
  }
}
