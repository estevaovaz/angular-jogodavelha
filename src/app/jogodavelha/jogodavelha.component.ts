import { Component, OnInit } from '@angular/core';
import { JogodavelhaService } from './shared/jogodavelha.service';

@Component({
  selector: 'app-jogodavelha',
  templateUrl: './jogodavelha.component.html',
  styleUrls: ['./jogodavelha.component.css']
})
export class JogodavelhaComponent implements OnInit {

  constructor(private jogodavelhaService: JogodavelhaService) { }

  ngOnInit(): void {
    this.jogodavelhaService.inicializador();
  }

  get showInicio(): boolean{
    return this.jogodavelhaService.showInicio;
  }

  get showTabuleiro(): boolean{
    return this.jogodavelhaService.showTabuleiro;
  }

  get showFinal(): boolean{
    return this.jogodavelhaService.showFinal ;
  }

  iniciarJogo(): void{
    this.jogodavelhaService.inicioJogo();
  }

  jogar(posX: number, posY: number): void{
    this.jogodavelhaService.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean{
    return this.jogodavelhaService.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean{
    return this.jogodavelhaService.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean{
    return this.jogodavelhaService.exibirVitoria(posX, posY);
  }

  get jogador(): number{
    return this.jogodavelhaService.jogador;
  }

  novoJogo(): void{
    this.jogodavelhaService.novoJogo();
  }

}
