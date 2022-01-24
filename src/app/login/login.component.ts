import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppSettings } from "../app.settings";
import { Settings } from "../app.settings.model";
import { AlertService } from "../shared/services/alert.service";
import { LoginserviceService } from "../login/loginservice.service";
import { emailValidator } from "../theme/utils/app-validators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AlertService],
})
export class LoginComponent {
  public TypeString: string = "password";
  public isPassword: boolean = true;

  public form: FormGroup;
  public settings: Settings;
  constructor(
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router,
    public alertService: AlertService,
    public _loginService: LoginserviceService,
  ) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      // email: [null, Validators.compose([Validators.required])],
      // password: [null,Validators.compose([Validators.required, Validators.minLength(6)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  // public onSubmit1(values: Object): void {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //     if(values["email"]=="admin@mg.com" && values["password"]=="password") {
  //       this.router.navigate(['/radar/radar-statistics']);
  //       this.alertService.createAlert("Login Success", 1);
  //       localStorage.setItem("loginUser", values["username"]);
  //       localStorage.setItem('userType','admin');
  //     }else  if(values["email"]=="inspector@ems.com" && values["password"]=="password") {
  //       this.router.navigate(['/admin/dashboard']);
  //       this.alertService.createAlert("Login Success", 1);
  //       localStorage.setItem("loginUser", values["username"]);
  //       localStorage.setItem('userType','inspector');
  //     } else if(values["email"]=="manager@ems.com" && values["password"]=="password") {
  //       this.router.navigate(['/admin/dashboard']);
  //       this.alertService.createAlert("Login Success", 1);
  //       localStorage.setItem("loginUser", values["username"]);
  //       localStorage.setItem('userType','manager');
  //     }
  //     else {
  //       this.alertService.createAlert("Invalid Credentials", 0);
  //     }
  //   }
  // }

  public onSubmit(values) {

    if (this.form.valid) {
      var list = {
        email: this.form.value.email,
        password: btoa(this.form.value.password)
      }
      this._loginService.login(list).subscribe(res => {
        if (res['Success'] == true) {
          this.router.navigate(['/radar/radar-statistics']);
          this.alertService.createAlert(res['Message'], 1);
          localStorage.setItem("loginUser", values["username"]);
          localStorage.setItem('userType','admin');
          // localStorage.removeItem('userSession');
          // localStorage.removeItem('userPermissions');
          // localStorage.setItem('userSession', JSON.stringify(res['Data']));
          // localStorage.setItem('userPermissions', JSON.stringify(res['Data']['permissions']));
        }
        else {
          this.alertService.createAlert(res['Message'], 0);
        }
      });
    }
  }

  // public ChangetextType(isPassword) {
  //   if (isPassword) {
  //     this.TypeString = "password";
  //   } else {
  //     this.TypeString = "text";
  //   }
  // }

  ngAfterViewInit() {
    setInterval(() => {
      this.settings.loadingSpinner = false;
    }, 500);
  }
}




