import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {GameServiceService} from '../../service/game-service.service';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.scss']
})
export class GamedetailComponent implements OnInit {

  gameRating:any = 0;
  gameId: string ='0';
  game:any ={};

  constructor(
    private actvatedRoute: ActivatedRoute,
    private apiService: GameServiceService
  ) { }

  ngOnInit(): void {
    this.actvatedRoute.params.subscribe((params:Params)=>{
      this.gameId = params['id'];
      this.getDetails(this.gameId);
    })
  }

  getDetails(id:string){
    this.apiService.getGameDetails(id).subscribe((res:any)=>{
      this.game = res;
      console.log(this.game)
      this.gameRating = this.game.metacritic;
    })

  }

  getColor(value:number): string{
    if(value>75){
      return 'green';
    }
    else if(value>50){
      return 'orange';
    }
    else if(value>30){
      return 'yellow';
    }
    else return 'red';
  }

  

}
