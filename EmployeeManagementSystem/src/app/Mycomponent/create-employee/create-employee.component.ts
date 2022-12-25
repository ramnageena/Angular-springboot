import { Router } from '@angular/router';
import { EmployeesService } from './../../employees.service';
import { Employee } from './../../employee';
import { Component } from '@angular/core';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
employee:Employee=new Employee;

constructor( private employeeService:EmployeesService,private router:Router){}

ngOnInit(): void {}

saveemployee(){
this.employeeService.createEmployee(this.employee).subscribe(data=>{
  console.log(data);
  this.goToEmployeeList();
},error=>console.log(error));

}
//navigate to the employee list
goToEmployeeList(){
  this.router.navigate(['/employees'])
}
onSubmit(){
  console.log(this.employee);
  this.saveemployee();


}
}
