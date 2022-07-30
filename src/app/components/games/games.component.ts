import { Component, OnInit } from '@angular/core';
import {GameServiceService} from '../../service/game-service.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gameList = [];
  searchKey:string ='';
  title:string = '';
  sort:string = 'na1m2e';
  searching:boolean = false;

  constructor( private gameService: GameServiceService,
               private router:Router) { }

  ngOnInit(): void {
    this.searching = true;
    this.gameService.gamesSearched.subscribe((res:any)=>{
      this.searchKey = res;
      this.getGamesList(this.sort,this.searchKey);
    });
  }

  sorting(){
    this.searching = true;
    this.getGamesList(this.sort, this.searchKey)
  }


  getGamesList(sort:string,data:string){
    this.searching = true;
    this.gameService.getAllGames(this.sort,data).subscribe(games =>{
      this.searching = false;
      this.gameList = games.results;

    })
  }

  gameDetails(id:any){
    this.router.navigate(['details',id]);
  }
}
