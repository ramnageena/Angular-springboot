package com.springNg.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springNg.exception.ResourceNotFoundException;
import com.springNg.model.Employee;
import com.springNg.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all Employee
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return employeeRepository.findAll();
	}
	
	//create a new employee
	@PostMapping("/employees")
	public Employee createEmployee( @RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//Get employee By id
	
	 @GetMapping("/employees/{id}")
	  public ResponseEntity<Employee> getEmployeeId(@PathVariable Long id){
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee  not exit with id : "+ id));
		 return ResponseEntity.ok(employee);
	}
	
	 //Update employee
	 @PutMapping("/employees/{id}")
	 public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
			Employee employee=employeeRepository.findById(id)
					.orElseThrow(()->new ResourceNotFoundException("Employee  not exit with id : "+ id));
			
			employee.setFirstName(employeeDetails.getFirstName());
			employee.setLastName(employeeDetails.getLastName());
			employee.setEmail(employeeDetails.getEmail());
			
			Employee updateEmployee=employeeRepository.save(employee);
			
			 return ResponseEntity.ok(updateEmployee);
		}
	   
	   
	  //delete employee
	 @DeleteMapping("/employees/{id}")
	 public ResponseEntity<Map<String, Boolean>> deleteEmployee( @PathVariable Long id){
			Employee employee=employeeRepository.findById(id)
					.orElseThrow(()->new ResourceNotFoundException("Employee  not exit with id : "+ id));
			employeeRepository.delete(employee);
		Map<String, Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		 
	 }
	 
	 
	 
}
