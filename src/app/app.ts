import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { IntroComponent } from './components/intro/intro';
import { AnivaultComponent } from './components/anivault/anivault';
import { CertificadosComponent } from './components/certificados/certificados';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { HobbiesComponent } from './components/hobbies/hobbies';
import { FooterComponent } from './components/footer/footer';




@Component({
  selector: 'app-root',
  imports: [
          HeaderComponent,
          IntroComponent,
          AnivaultComponent,
          CertificadosComponent,
          ExperienciaComponent,
          HobbiesComponent,
          FooterComponent,
        ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularDIO');
}
