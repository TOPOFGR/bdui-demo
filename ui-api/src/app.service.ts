import { Injectable } from '@nestjs/common';
import { Component, Country, HomePage } from './types';

import argetinaJSON from './templates/home/ar.json';
import uruguayJSON from './templates/home/uy.json';

const CountryMap = {
  [Country.Argentina]: argetinaJSON,
  [Country.Uruguay]: uruguayJSON,
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHomePage(country: string): object {
    return CountryMap[country];
  }
}
