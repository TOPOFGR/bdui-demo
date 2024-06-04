import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Component, HomePage } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('home')
  getHomePage(): Component<HomePage> {
    return this.appService.getHomePage();
  }
}
