import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private newInspection: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public getNewInspectionObservable = this.newInspection.asObservable();

  private newDefect: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public getNewDefectObservable = this.newDefect.asObservable();
  
  constructor(private http: HttpClient) { }

  getInspection() {
    return this.http.get("http://localhost:58785/api/get-inspection")
  }

  saveInspection(Inspection: any) {
    return this.http.post("http://localhost:58785/api/inspection/upsertinspection", Inspection);
  }

  updateInspection(InspectionID: any) {
    return this.http.get("http://localhost:58785/api/inspection/upsertinspection"+InspectionID);
  }

  statusUpdateInspection(InspectionID: any) {
    return this.http.post("http://localhost:58785/api/inspection/statusupdateinspection",InspectionID);
  }

  deleteInspection(InspectionID: any) {
    return this.http.get("http://localhost:58785/api/inspection/deleteinspection/"+InspectionID);
  }

  setNewInspection(inspection) {
    this.newInspection.next(inspection);
    }

  getDefect() {
    return this.http.get("http://localhost:58785/api/get-defect")
  }

  saveDefect(Defect: any) {
    return this.http.post("http://localhost:58785/api/defect/upsertdefect", Defect);
  }

  updateDefect(DefectID: any) {
    return this.http.get("http://localhost:58785/api/defect/upsertdefect"+DefectID);
  }

  statusUpdateDefect(DefectID: any) {
    return this.http.post("http://localhost:58785/api/defect/statusupdatedefect",DefectID);
  }

  deleteDefect(DefectID: any) {
    return this.http.get("http://localhost:58785/api/defect/deletedefect/"+DefectID);
  }

  getNews() {
    return this.http.get("http://localhost:58785/api/get-news")
  }

  updateNews(NewsID: any) {
    return this.http.get("http://localhost:58785/api/news/upsertnews"+NewsID);
  }

  saveNews(News: any) {
    return this.http.post("http://localhost:58785/api/news/upsertnews", News);
  }

  deleteNews(NewsID: any) {
    return this.http.get("http://localhost:58785/api/news/deletenews/"+NewsID);
  }

  statusUpdateNews(NewsID: any) {
    return this.http.post("http://localhost:58785/api/news/statusupdatenews",NewsID);
  }

  getAssignments(insepectionTypeId: number) {
    return this.http.get("http://localhost:58785/api/get-assignment?insepectionTypeId="+insepectionTypeId);
  }

  saveAssignments(Assignment: any) {
    return this.http.post("http://localhost:58785/api/assignment/upsertassignment", Assignment);
  }

}