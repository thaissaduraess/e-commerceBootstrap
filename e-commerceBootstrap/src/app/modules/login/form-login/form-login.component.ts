import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],
      senha: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get email() {
    return this.profileForm.controls['email'];
  }

  get senha() {
    return this.profileForm.controls['password'];
  }

}
