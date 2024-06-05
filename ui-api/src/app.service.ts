import { Injectable } from '@nestjs/common';
import { Component, HomePage } from './types';

const buttonJson = {
  id: 'main-button 1',
  type: 'mui-button',
  props: {
    children: 'Este es el contenido de mi JSON',
  },
};

const row = {
  id: 'button-row',
  type: 'ui-row',
  props: {
    items: [buttonJson, buttonJson],
    content: 'Este es el contenido de mi JSON',
  },
};
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHomePage(): Component<HomePage> {
    return {
      id: 'main-homepage-container',
      type: 'mui-card',
      children: [row, row, buttonJson],
      props: {
        // items: [buttonJson, buttonJson, buttonJson],
        // content: 'Este es el contenido de mi JSON',
      },
    };
  }
}
