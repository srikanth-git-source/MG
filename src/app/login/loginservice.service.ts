import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  debugger
  constructor(public httpClient : HttpClient) { }

  login(data:any) {
    return this.httpClient.post(environment.apiUrl+'api/auth/login', data);
  }
  forgotPassword(emailId) {
    return this.httpClient.post(environment.apiUrl+'api/auth/send-forgot-password', emailId);
  }
  setPassword(password, userId, token) {
    return this.httpClient.post(environment.apiUrl+'api/auth/update-password', { 'userId': userId, 'password': password, 'token': token });
  }
  
  emailLinkTimeValidation(id) {
    return this.httpClient.post(environment.apiUrl+'api/auth/forgot-password', id )
  }
}
