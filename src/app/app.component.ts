import { Component } from '@angular/core';

 
// highlight-start

import {TranslateService} from "@ngx-translate/core";



 
// highlight-end

import { marker as MK } from '@biesbjerg/ngx-translate-extract-marker';




{

    let messageBoxContent = MK('messagebox.warning.text');

}




@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

// highlight-start

  constructor(private translate: TranslateService) {

    translate.setDefaultLang('en');

    translate.use('en');

    translate.get('demo.greeting', {name: 'John'}).subscribe((res: string) => {

      console.log(res);

    });

    console.log(translate.instant('demo.greeting', {name: 'John'}));

  }

  useLanguage(language: string): void {

      this.translate.use(language);
      console.log(language)

    }




// highlight-end

}




 