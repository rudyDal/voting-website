import { Injectable } from '@angular/core';
import { VoterInfo } from '../../classes/voterInfo';
import { ProfileData } from '../../classes/profileData';
import  {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class VoterDataServiceService {

  dalIdURL = 'https://cdn.dal.ca/campus_life/Dalcard/get-your-dalcard/200th-anniversary-dalcard/_jcr_content/contentPar/staticimage.adaptive.full.high.jpg/1499451786343.jpg';
 
//User dummy profile documents
  profile: ProfileData = {dalcardUrl: 'dalIdURL', studyPermitUrl: 'https://visaguide.world/wp-content/uploads/2018/07/immigrant-visa-canada.png'};

//Dummy Voter Info 
  user : VoterInfo = {ethAddress:'0x1043f4cfcc26d2db7d206a3632777bf740c2e4aed3fc93aae22d30dd790c3b09', name:'Aniruddha Chitley', profile: this.profile};

  constructor() { }

  getVoterProfile(): Observable<VoterInfo>{
  	return of(this.user);
  }
}
