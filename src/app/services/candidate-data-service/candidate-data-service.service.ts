import { Injectable } from '@angular/core';
import {CandidateCard} from '../../classes/candidateCard';
import  {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateDataServiceService {

  constructor() { }

//Dummy array for candidate card component
  candidateVP : CandidateCard[] = [
  	{voteCount:55, name:'Aniruddha',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
  	{voteCount:56, name:'Nikhil',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
  	{voteCount:57, name:'Nitish',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
    {voteCount:57, name:'Nitish',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
    {voteCount:57, name:'Nitish',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
    {voteCount:57, name:'Nitish',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
    {voteCount:57, name:'Nitish',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
    {voteCount:57, name:'Nitish',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
    {voteCount:57, name:'Nitish',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
    {voteCount:57, name:'Nitish',candidateImageURL: 'https://competensys.com/wp-content/uploads/2015/03/male.png'},
  ];

  //Dummy array for candidate card component
  candidatePresident : CandidateCard[] = [
  	{voteCount:32, name:'John',candidateImageURL: 'https://dummyimage.com/300x300'},
  	{voteCount:45, name:'Snow',candidateImageURL: 'https://dummyimage.com/300x300'},
  	{voteCount:26, name:'Doe',candidateImageURL: 'https://dummyimage.com/300x300'},
  ];

  //Dummy array for candidate card component
  candidateVPExt : CandidateCard[] = [
  	{voteCount:32, name:'Honey',candidateImageURL: 'https://dummyimage.com/300x300'},
  	{voteCount:45, name:'Snow',candidateImageURL: 'https://dummyimage.com/300x300'},
  	{voteCount:26, name:'Doe',candidateImageURL: 'https://dummyimage.com/300x300'},
  ];

  emptyArray : CandidateCard[] =[];

  getCurrentPollStats(election): Observable<CandidateCard[]> {
  	if (election === 'VP') {
  		return of(this.candidateVP);
  	}
  	if (election === 'President') {
  		return of(this.candidatePresident);
  	}
  	if (election === 'VPExt') {
  		return of(this.candidateVPExt);
  	}
  	else{
  		return of(this.emptyArray);
  	}
  }


}
