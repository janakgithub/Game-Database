import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(games:any, searchString:any, property:string): any[] {
    
    const results:any =[];

    if(searchString=='' || property == ''){
      return games;
    }
    games.forEach((res:any) => {
      if(res[property].trim().toLowerCase().include(searchString.toLowerCase())){
        results.push(res);
      }
    });
    return results;
  }

}
