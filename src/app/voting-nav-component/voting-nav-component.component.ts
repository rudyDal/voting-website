import { Component, OnInit } from '@angular/core';
import { VoterDataServiceService } from '../services/voter-data-service/voter-data-service.service';
import { VoterInfo } from '../classes/voterInfo';

@Component({
  selector: 'app-voting-nav-component',
  templateUrl: './voting-nav-component.component.html',
  styleUrls: ['./voting-nav-component.component.css']
})


export class VotingNavComponent implements OnInit {

// dummy vote object 
  voter : VoterInfo;

  constructor(private voterInf : VoterDataServiceService) { }

  getVoterProf(){
  	this.voterInf.getVoterProfile().subscribe(voterData =>{
  		this.voter = voterData;
  	})
  }

  ngOnInit() {
  	this.getVoterProf();
  }

}
