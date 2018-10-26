import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { identifierModuleUrl } from '@angular/compiler';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  
})
export class EmployeeComponent implements OnInit {
  Id:any;
  upadteData:any;
  constructor(private employeeService: EmployeeService,private router:Router,private _route :ActivatedRoute) { }
  
  

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
    this.Id = this._route.snapshot.paramMap.get('id');
    console.log("data=>>>>>>>>>>>"+this.Id);
    this.update();
    
  }
 
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        console.log(res);
        this.router.navigate(['/display']);
     
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        this.router.navigate(['/display']);
        M.toast({ html: 'Updated successfully', classes: 'rounded' });

      });
    }
 
  }
  update(){

    this.employeeService.getdata(this.Id).subscribe(res=>{
      this.employeeService.selectedEmployee = res as Employee;
     
    })
    
  }
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

}
