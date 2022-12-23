import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  form: any;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  whats() {
  
  }

  enviar() {
    let nome = this.form.get('nome').value;
    let endereco = this.form.get('endereco').value;

    this.abrirUrl(`https://api.whatsapp.com/send?phone=5579996321034&&text=Olá%20me%20chamo%20${nome},%20%20moro%20na%20${endereco}.%20%20Vim%20atraves%20do%20seu%20App!%20%20Gostaria%20de%20receber%20doacões`);

  }

  abrirUrl(url: string) {
    window.open(url, '_blank')?.focus();
  }

}
