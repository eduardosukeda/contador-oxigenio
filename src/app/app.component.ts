import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tempoDuracaoCilindro = new Date();
  isTempoDuracao: boolean = false;
  tamanhoCilindro: string = '';
  libras: string = '';
  oxigenioMin: string = '';

  ngOnInit(): void {

  }

  calcular(): void {
    this.tempoDuracaoCilindro = new Date();
    let minutosDuracaoCilindro = ((parseFloat(this.tamanhoCilindro) * parseFloat(this.libras)) / parseFloat(this.oxigenioMin))
    this.tempoDuracaoCilindro.setMinutes(this.tempoDuracaoCilindro.getMinutes() + minutosDuracaoCilindro);
    this.isTempoDuracao = true;
  }

  limpar(): void {
    this.tempoDuracaoCilindro = new Date();
    this.isTempoDuracao = false;
  }
}
