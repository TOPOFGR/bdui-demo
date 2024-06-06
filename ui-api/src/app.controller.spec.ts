import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Country } from './types';
import arJSON from './templates/home/ar.json';
import uyJSON from './templates/home/uy.json';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Home', () => {
    test('should throw an exception if there are no query params', async () => {
      try {
        appController.getHomePage({ country: '' });
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
      }
    });

    test('should return the ar.JSON when receiving Argetina as country', () => {
      expect(
        appController.getHomePage({ country: Country.Argentina }),
      ).toStrictEqual(arJSON);
    });

    test('should return the uy.JSON when receiving Uruguay as country', () => {
      expect(
        appController.getHomePage({ country: Country.Uruguay }),
      ).toStrictEqual(uyJSON);
    });
  });
});
