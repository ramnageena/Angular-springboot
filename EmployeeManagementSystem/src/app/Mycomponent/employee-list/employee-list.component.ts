import { Router } from '@angular/router';
import { EmployeesService } from './../../employees.service';
import { Employee } from './../../employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees!:Employee[];

  constructor( private employeeService:EmployeesService,
    private router:Router){

  }
  ngOnInit(): void {
   this.getEmployees();
  }
   private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
     this.employees=data
    });
  }

  updateEmployee(id:number){
this.router.navigate(['update-employee',id])
  }


  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })

  }
  emoloyeeDetails(id:number){
    this.router.navigate(['employee-details',id])

  }

}
