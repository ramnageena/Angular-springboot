import { EmployeesService } from './../../employees.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

id!:number;
employee!:Employee;

  constructor( private employeeService:EmployeesService,
    private route:ActivatedRoute,private router:Router){ }

  ngOnInit(): void {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })
  }
  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      console.log(data);
      this.employee=new Employee();
      this.goToEmployeeList()
    });
  }

  onSubmit(){
    this.updateEmployee();
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

}
