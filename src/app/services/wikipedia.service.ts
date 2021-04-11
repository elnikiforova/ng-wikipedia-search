import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  public search(term: string) {
    return 'i am wikipedia search results';
  }
}

/*

  https://en.wikipedia.org/w/api.php?
    action=query&
    format=json&
    list=search&
    utf8=1&
    srsearch=space

*/
