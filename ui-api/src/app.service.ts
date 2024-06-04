import { Injectable } from '@nestjs/common';
import { Component, HomePage } from './types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHomePage(): Component<HomePage> {
    return {
      id: 'main-homepage-container',
      type: 'ui-row',
      children: [],
      props: {
        content: 'Este es el contenido de mi JSON',
      },
    };
  }
}
