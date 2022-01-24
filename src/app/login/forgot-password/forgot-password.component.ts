import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AlertService } from '../../shared/services/alert.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  public form:FormGroup;
  public settings: Settings;

  constructor(
    public appSettings:AppSettings, 
    private location: Location ,
    public fb: FormBuilder, 
    public router:Router, 
    public loginService: LoginserviceService, 
    public alertService: AlertService) 
    {
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
    });
   }

   goBack() {
     this.location.back();
   }

  ngOnInit() {
  }

  public onSubmit(emailId:Object):void {
    if (this.form.valid) {
     this.loginService.forgotPassword(emailId).subscribe(
       Response=>{
         if (Response['Success'] == true){
          this.router.navigate(['/login'])
          this.alertService.createAlert('Password reset email sent successfully', 1);
  
         }
          else{
          this.alertService.createAlert('User Not Registered', 0);

          }
       },
       error=>{
         console.log(error)
       }
     )
    }
    else {
      this.alertService.createAlert('Please give valid user email', 0);
      
    }
  }
  

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }

}
