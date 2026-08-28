import { Component } from '@angular/core';

/**
 * Componente responsavel por exibir a lista de projetos do AniVault no blog.
 */
@Component({
  selector: 'app-anivault',
  imports: [],
  templateUrl: './anivault.html',
  styleUrl: './anivault.css',
})

export class AnivaultComponent {

/**
 * Título principal exibido no card do Anivault.
 */
tituloProjeto string = 'AniVault - Hub de Animes';

/**
 * Métodos acionado ao clicar para abrir os detalhes do projeto
 */
abrirDetalhes(): void {
  console.console.log('Abrindo detalhes do Anivault...');

}
}
