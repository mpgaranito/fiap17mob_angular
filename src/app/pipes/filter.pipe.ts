import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: any, filterBy: string) {

    if (!items) return [];
    if (!filterBy) return items;

    var values = items.filter(function (data) {
      return data.nome.toUpperCase().includes(filterBy.toUpperCase());
    });
    return values;
  }
}
