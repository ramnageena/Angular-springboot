import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor( private httpClient:HttpClient) { }
  private urlBase='http://localhost:9091/api/v1/employees'

  //Get all list using GetMethod()

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.urlBase}`)
  }

  //create a new employee
  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.urlBase}`,employee)
  }

  //get a particular data by id

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.urlBase}/${id}`);
  }
    //update  employee
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.urlBase}/${id}`, employee);
  }

  //delete employee
  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.urlBase}/${id}`);
  }

}
