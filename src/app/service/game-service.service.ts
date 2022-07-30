import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, forkJoin} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) { }

  public gamesSearched = new BehaviorSubject<String>('')

  

  getAllGames(order:string, search?:string){
    const headers = new HttpHeaders()
       .set("X-RapidAPI-Key", "3a3db38fd9msh41db3555a93b5a5p150798jsn0420c65180dd")
      .set("X-RapidAPI-Host", "rawg-video-games-database.p.rapidapi.com")
      .set("useQueryString", 'true')
      
      
      let params = new HttpParams().set('ordering', order).set('key','ca012671f6234f72b4b13e78bd7af398');

      if(search){
        params = new HttpParams().set('ordering', order).set('search',search).set('key','ca012671f6234f72b4b13e78bd7af398');
      }

   
    return this.http.get<any>("https://rawg-video-games-database.p.rapidapi.com/games",
    {'headers':headers, params});
    
  }

  getGameDetails(id:string){
    const headers = new HttpHeaders()
    .set("X-RapidAPI-Key", "3a3db38fd9msh41db3555a93b5a5p150798jsn0420c65180dd")
    .set("X-RapidAPI-Host", "rawg-video-games-database.p.rapidapi.com")
    .set("useQueryString", 'true')
    let params = new HttpParams().set('key','ca012671f6234f72b4b13e78bd7af398');
    const moreInfo = this.http.get<any>("https://rawg-video-games-database.p.rapidapi.com/games/"+`${id}`,{'headers':headers, params})
    const trailers = this.http.get<any>("https://rawg-video-games-database.p.rapidapi.com/games/"+`${id}`+"/movies",{'headers':headers, params})
    const screenshots = this.http.get<any>("https://rawg-video-games-database.p.rapidapi.com/games/"+`${id}`+"/screenshots",{'headers':headers, params})

    return forkJoin({
      moreInfo,
      trailers,
      screenshots
    }).pipe(
      map((res:any)=>{
        return {
          ...res['moreInfo'],
          trailers: res['trailers'].results,
          screenshots: res['screenshots'].results
        };
      })
    )
  }
}
