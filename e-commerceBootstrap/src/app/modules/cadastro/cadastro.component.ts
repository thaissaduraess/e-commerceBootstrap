import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  profileForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
    CEP: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    endereço: new FormControl(''),
    complemento: new FormControl('')
  });

  estados = [
    {
      id: 1,
      nome_estado: 'AC'
    },
    {
      id: 2,
      nome_estado: 'AL'
    },
    {
      id: 3,
      nome_estado: 'AP'
    },
    {
      id: 4,
      nome_estado: 'AM'
    },
    {
      id: 5,
      nome_estado: 'BA'
    },
    {
      id: 6,
      nome_estado: 'CE'
    },
    {
      id: 7,
      nome_estado: 'DF'
    },
    {
      id: 8,
      nome_estado: 'ES'
    },
    {
      id: 9,
      nome_estado: 'GO'
    },
    {
      id: 10,
      nome_estado: 'MA'
    },
    {
      id: 11,
      nome_estado: 'MT'
    },
    {
      id: 12,
      nome_estado: 'MS'
    },
    {
      id: 13,
      nome_estado: 'MG'
    },
    {
      id: 14,
      nome_estado: 'PA'
    },
    {
      id: 15,
      nome_estado: 'PB'
    },
    {
      id: 16,
      nome_estado: 'PR'
    },
    {
      id: 17,
      nome_estado: 'PE'
    },
    {
      id: 18,
      nome_estado: 'PI'
    },
    {
      id: 19,
      nome_estado: 'RJ'
    },
    {
      id: 20,
      nome_estado: 'RN'
    },
    {
      id: 21,
      nome_estado: 'RS'
    },
    {
      id: 22,
      nome_estado: 'RO'
    },
    {
      id: 23,
      nome_estado: 'RR'
    },
    {
      id: 24,
      nome_estado: 'SC'
    },
    {
      id: 25,
      nome_estado: 'SP'
    },
    {
      id: 26,
      nome_estado: 'SE'
    },
    {
      id: 27,
      nome_estado: 'TO'
    }
  ];



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
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      endereço: ['', [Validators.required]],
      complemento: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get email() {
    return this.profileForm.controls['email'];
  }

  get senha() {
    return this.profileForm.controls['senha'];
  }

  get cidade() {
    return this.profileForm.controls['cidade'];
  }

  get estado() {
    return this.profileForm.controls['estado'];
  }

  get endereço() {
    return this.profileForm.controls['endereço'];
  }

  get complemento() {
    return this.profileForm.controls['complemento'];
  }


}
