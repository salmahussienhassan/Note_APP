import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(notes:any[], searchWord: string): any[] {
    return notes.filter((note)=>{
      return note.title.toLowerCase().includes(searchWord.toLowerCase())
    })
  }

}
