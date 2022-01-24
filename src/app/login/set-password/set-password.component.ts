import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  public form:FormGroup;
  encryptedId : any
  isReset: boolean;

  constructor(public loginservice : LoginserviceService,public fb: FormBuilder, private alertService: AlertService,  public snackBar: MatSnackBar, private activatedRoute: ActivatedRoute,public router:Router) {   
    this.activatedRoute.params.subscribe(params => {
    this.encryptedId = params['id'];
});
 //Change Password Form
 this.form = this.fb.group({
  'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
  'confirmPassword': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
});
}



ngOnInit() {
  this.router.events.subscribe((res) => {
  })
  if(this.router.url.includes('/setpassword')){
    this.isReset = false;
  }
  else{
    this.isReset = true;
  }
  //If the current Url pointing to change password without parameter 
  //then redirecting to login
  if(this.encryptedId == null){
    if (this.router.url == '/login/resetpassword' || this.router.url == '/resetpassword' || this.router.url == '/login/setpassword') {
      this.router.navigate(['/login'])
    }
  }
  else{
    this.loginservice.emailLinkTimeValidation(this.encryptedId).subscribe(
      data=>{
        if(data['Success']!=true){
              this.router.navigate(['/login'])
        }
        else{
          this.userId = data['Data'];
        }
      },
      error=>{
      }
    )
  }
}
public onSubmit(values:Object):void {
  if (this.form.valid) {
    //To check the password and confiem password matching
    if(values['password'] == values['confirmPassword']){
    var token = this.encryptedId;
    var pwrd = values['password'];
    let formvalues = {verificationToken: token, password: pwrd}
  this.loginservice.setPassword( pwrd,this.userId,token).subscribe(
    Response=>{
      console.log(Response);
      if(Response['Success'] == true){
      this.router.navigate(['/login'])
      this.alertService.createAlert(Response['Message'], 1);
      }
      else{
      this.alertService.createAlert(Response['Message'], 0);

      }
      // else{
      //   this.alertService.createAlert(Response.message, 0);
      // }


              // //Sending message to Snackbar
              // this.snackBar.open(data['message'], '', {
              //   duration: 2000,
              // });
    },
    error=>{
      console.log(error)
    
        

    }
  )
  }
  else{
    this.snackBar.open('New password and confirm password do not match', '', {
      duration: 2000,
      panelClass: 'redSnackBar'
    });
  }
   
  }
}  userId(pwrd: any, userId: any) {
  throw new Error('Method not implemented.');
}

}
