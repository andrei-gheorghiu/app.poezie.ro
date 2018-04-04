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
        title: 'm.poezie',
        slug: 'poezie'
      },
      {
        title: 'm.personale',
        slug: 'personale'
      },
      {
        title: 'm.proza',
        slug: 'proza'
      },
      {
        title: 'm.scenariu',
        slug: 'scenariu',
        items: [
          {
            title: 'm.scenariu.actiune',
            slug: 'actiune'
          },
          {
            title: 'm.scenariu.comedie',
            slug: 'comedie'
          },
          {
            title: 'm.scenariu.drama',
            slug: 'drama'
          },
          {
            title: 'm.scenariu.scurtmetraj',
            slug: 'scurt-metraj'
          },
          {
            title: 'm.scenariu.teatru',
            slug: 'teatru'
          }
        ]
      },
      {
        title: 'm.eseu',
        slug: 'eseu'
      },
      {
        title: 'm.presa',
        slug: 'presa'
      },
      {
        title: 'm.articol',
        slug: 'articol'
      },
      {
        title: 'm.comunitati',
        slug: 'comunitati'
      },
      {
        title: 'm.concurs',
        slug: 'concurs'
      },
      {
        title: 'm.special',
        slug: 'special'
      },
      {
        title: 'm.tehnicaliterara',
        slug: 'tehnica-literara'
      },
      {
        title: 'm.multimedia',
        slug: 'multimedia'
      },
    ];
  }
}
