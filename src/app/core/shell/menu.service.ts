import { Injectable } from '@angular/core';
import {MenuItem} from '@app/core/interface/menu-item';

@Injectable()
export class MenuService {

  public menu: MenuItem[];

  constructor() {
    this.menu = MenuService.setMenu();
  }

  private static setMenu(): MenuItem[] {
    return [
      {
        title: 'Poezie',
        slug: 'poezie'
      },
      {
        title: 'Personale',
        slug: 'personale'
      },
      {
        title: 'Proză',
        slug: 'proza'
      },
      {
        title: 'Scenariu',
        slug: 'scenariu',
        items: [
          {
            title: 'Acțiune',
            slug: 'actiune'
          },
          {
            title: 'Comedie',
            slug: 'comedie'
          },
          {
            title: 'Dramă',
            slug: 'drama'
          },
          {
            title: 'Scurt metraj',
            slug: 'scurt-metraj'
          },
          {
            title: 'Teatru',
            slug: 'teatru'
          }
        ]
      },
      {
        title: 'Eseu',
        slug: 'eseu'
      },
      {
        title: 'Presă',
        slug: 'presa'
      },
      {
        title: 'Articol',
        slug: 'articol'
      },
      {
        title: 'Comunități',
        slug: 'comunitati'
      },
      {
        title: 'Concurs',
        slug: 'concurs'
      },
      {
        title: 'Special',
        slug: 'special'
      },
      {
        title: 'Tehnică literară',
        slug: 'tehnica-literara'
      },
      {
        title: 'Multimedia',
        slug: 'multimedia'
      },
    ];
  }
}
