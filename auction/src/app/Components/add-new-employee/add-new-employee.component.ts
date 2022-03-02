import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {

  empForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    roleid: new FormControl(41, [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public register:RegisterService) { }

  ngOnInit(): void {
  }

  GetEmpFormvalues() {
    console.log(this.empForm.value);
    this.register.InsertEmployee(this.empForm.value);
  }
}
