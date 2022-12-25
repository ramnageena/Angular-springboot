import { EmployeeDetailsComponent } from './Mycomponent/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './Mycomponent/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './Mycomponent/create-employee/create-employee.component';
import { EmployeeListComponent } from './Mycomponent/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'create-Employee' ,component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-details/:id' ,component:EmployeeDetailsComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
