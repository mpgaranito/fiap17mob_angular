import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(items: any, nameButton: string) {
    if (!items) return [];
    if (!nameButton) return items;
    if (nameButton === 'ASC') {
      return orderBy(items, 'nome', 'asc');
    } else {
      return orderBy(items, 'nome', 'desc');
    }
  }

}
