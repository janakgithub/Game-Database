import { Component, OnInit } from '@angular/core';
import { GameServiceService} from '../../service/game-service.service'
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchGame: string ='';
  constructor(private gameService: GameServiceService,
              private router: Router) { }

  gameList:any;
  ngOnInit(): void {
  }

  getSearchedGames(form: NgForm){
    this.gameService.gamesSearched.next(this.searchGame);
  //  this.gameService.getAllGames('',this.searchGame).subscribe(res=>{
  //   this.gameList = res.results;
  //   this.router.navigate(['search', this.searchGame])
  //   console.log(this.gameList)
  //  })
  }


  navigateToHome(){
    this.router.navigate(['/home']);
  }


}
