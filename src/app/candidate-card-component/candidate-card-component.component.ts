import { Component, OnInit } from '@angular/core';
import {Elections} from '../classes/electionDropdown';
import {CandidateDataServiceService} from '../services/candidate-data-service/candidate-data-service.service';
import {CandidateCard} from '../classes/candidateCard';

@Component({
  selector: 'app-candidate-card-component',
  templateUrl: './candidate-card-component.component.html',
  styleUrls: ['./candidate-card-component.component.css']
})
export class CandidateCardComponent implements OnInit {

// Dummy elctions
  elections: Elections[] = [
    {value: 'VP', viewValue: 'Vice President Internal'},
    {value: 'VPExt', viewValue: 'Vice President External'},
    {value: 'President', viewValue: 'President'}
  ];
  selected = 'VP';

// Current vote status
  candidateVotes: CandidateCard[] = [];

  constructor(private electionStat : CandidateDataServiceService) {
    this.getcurrentVotes(this.selected);
  }


// To get the list of candidates current vote count
  getcurrentVotes(cdc){
  	this.electionStat.getCurrentPollStats(cdc).subscribe(candidateCards =>{
  		this.candidateVotes = candidateCards;
  	})
  }

  ngOnInit() {
  	
  }

}
