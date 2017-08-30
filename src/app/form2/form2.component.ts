import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

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
        this.fb.control('', [Validators.required]),
        this.fb.control('', [Validators.required])
      ])

    });

  }

  ngOnInit() {
  }

  addNewAddress() {
    var addresses = this.form.get('addresses') as FormArray;
    addresses.push(this.fb.control('', [Validators.required]));
  }
}
