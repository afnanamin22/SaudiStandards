import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   Formid:string=''; 
   Step:any=1;
  Whiteimg:string='../../../assets/img/Ellipse 3.png';
  Greenimg:string='../../../assets/img/Ellipse 4.png'
  constructor(private _ActivatedRoute:ActivatedRoute,private _Router:Router) { }
  ngOnInit(): void {
    this.Formid=this._ActivatedRoute.snapshot.params['id'];
  }
  
  RegisterForm:FormGroup= new FormGroup({
    BasicInfo:new FormGroup({
      isSaudi:new FormControl(null,[Validators.required]),
      nameAr:new FormControl(null,[Validators.required]),
      nameEn:new FormControl(null,[Validators.required]),
      phone:new FormControl(null,[Validators.required]),
      fax:new FormControl(null),
      poBox:new FormControl(null,[Validators.required]),
      postcode:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      countryId:new FormControl(null,[Validators.required]),
      locationUrl:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required]),
      commercialRegisterstring:new FormControl(null,[Validators.required]),
      commercialRegisterstringEndDate:new FormControl(null,[Validators.required]),
      website:new FormControl(null),
    }),
    MoreInfo:new FormGroup({
      authorityLetterUrl:new FormControl(null,[Validators.required]),
    }),
    LastInfo:new FormGroup({
      contact1_name:new FormControl(null,[Validators.required]),
      contact1_nameEn:new FormControl(null,[Validators.required]),
      contact1_phone:new FormControl(null,[Validators.required]),
      contact1_email:new FormControl(null,[Validators.required]),
      contact1_position:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
    })
  })
  next(){
    this.Step=this.Step+1;
  }
  previous(){
    this.Step=this.Step-1;
  }
  redirect()
  {
    this._Router.navigate(['/auth/success'])
  }

}
