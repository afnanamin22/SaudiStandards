import { Component, OnInit } from '@angular/core';
import{Validators,FormGroup,FormControl}from '@angular/forms'

@Component({
  selector: 'app-factory-register',
  templateUrl: './factory-register.component.html',
  styleUrls: ['./factory-register.component.scss']
})
export class FactoryRegisterComponent implements OnInit {
  registerFactoryForm:FormGroup=new FormGroup({
    factoryType:new FormControl(null,[Validators.required]),
    CompanyNameInEnglish:new FormControl(null,[Validators.required]),
    CompanyNameInِArabic:new FormControl(null,[Validators.required]),
    MobileNumber:new FormControl(null,[Validators.required]),
    MailBox:new FormControl(null,[Validators.required]),
    MailCode:new FormControl(null,[Validators.required]),
    Country:new FormControl(null,[Validators.required]),
    City:new FormControl(null,[Validators.required]),
    Address:new FormControl(null,[Validators.required]),
    CommercialRegsiterNum:new FormControl(null,[Validators.required]),
    CommercialRegsiterExpiryDate:new FormControl(null,[Validators.required]),
    FaxNumber:new FormControl(null),
    Website:new FormControl(null),
    
   })
  constructor() { }

  ngOnInit(): void {
    
  }

}
