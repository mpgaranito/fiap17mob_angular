import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: any, filterBy: string) {
        var values = items.filter(function(data) {
            return data.name.toUpperCase().includes(filterBy.toUpperCase());
        });
        return values;
    }
}
