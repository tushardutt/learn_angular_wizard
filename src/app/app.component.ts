import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'newMat';
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
  this.firstFormGroup = this._formBuilder.group({
  fname: ['', Validators.required],
  lname: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
  email: ['', Validators.required],
  mobile: ['', Validators.required],
  country:['',Validators.required]
  });
  this.thirdFormGroup = this._formBuilder.group({
    skill1: ['', Validators.required],
    skill2: ['', Validators.required],
    skill3:['',Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      job1: ['', Validators.required],
      job2: ['', Validators.required],
      job3:['',Validators.required]
      });
  }
  submit(){
  console.log(this.firstFormGroup.value);
  console.log(this.secondFormGroup.value);
  console.log(this.thirdFormGroup.value);
  console.log(this.fourthFormGroup.value);
  }
}
