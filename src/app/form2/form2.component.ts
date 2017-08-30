import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from "@angular/forms";

function MustContainsTaipei(c: AbstractControl) {
  if (c.value.indexOf('Taipei') >= 0) {
    return null;
  }
  else {
    return {
      'must-contains-taipei': true
    }
  }
}

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      title: ['Will', [Validators.required, Validators.minLength(3)]],

      group1: this.fb.group({
        subtitle: ['Hello', [Validators.required]]
      }),

      addresses: this.fb.array([
        this.fb.control('', [Validators.required, MustContainsTaipei]),
        this.fb.control('', [Validators.required, MustContainsTaipei])
      ])

    });

  }

  ngOnInit() {
    let obj = {
      "title": "Will 123",
      "group1": {
        "subtitle": "Hello"
      },
      "addresses": [
        "Taipei",
        "Kaoshuang"
      ]
    };
    this.form.reset(obj);
  }

  addNewAddress() {
    var addresses = this.form.get('addresses') as FormArray;
    addresses.push(this.makeControl(''));
  }

  makeControl(defaultValue) {
    return this.fb.control(defaultValue, [Validators.required]);
  }

}
