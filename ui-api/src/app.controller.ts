import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Component, Country, HomePage, HomePageQueryParams } from './types';

const availableCountries: Array<string> = [Country.Argentina, Country.Uruguay];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('home')
  getHomePage(@Query() { country }: HomePageQueryParams): object {
    if (!availableCountries.includes(country)) {
      throw new BadRequestException();
    }

    return this.appService.getHomePage(country);
  }
}
