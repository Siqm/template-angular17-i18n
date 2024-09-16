import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'template-angular-i18n';
  constructor(private translateService: TranslateService) {
    const userLanguage = navigator.language || 'en'
    console.log('userLanguage', userLanguage);
    const languageCode = userLanguage.split('-')[0];
    this.translateService.setDefaultLang(languageCode)
    this.translateService.use(languageCode)
  }
}
