import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconSocietyComponent } from './components/icon-society/icon-society.component';
import { IconMailComponent } from './components/icon-mail/icon-mail.component';
import { IconPhoneComponent } from './components/icon-phone/icon-phone.component';
import { IconPlusComponent } from './components/icon-plus/icon-plus.component';
import { IconProductComponent } from './components/icon-product/icon-product.component';
import { IconPriceComponent } from './components/icon-price/icon-price.component';
import { IconListComponent } from './components/icon-list/icon-list.component';
import { IconKeyComponent } from './components/icon-key/icon-key.component';
import { IconFolderOpenComponent } from './components/icon-folder-open/icon-folder-open.component';



@NgModule({
  declarations: [
    IconCloseComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconSocietyComponent,
    IconMailComponent,
    IconPhoneComponent,
    IconPlusComponent,
    IconProductComponent,
    IconPriceComponent,
    IconListComponent,
    IconKeyComponent,
    IconFolderOpenComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconCloseComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconSocietyComponent,
    IconMailComponent,
    IconPhoneComponent,
    IconPlusComponent,
    IconProductComponent,
    IconPriceComponent,
    IconListComponent,
    IconKeyComponent,
    IconFolderOpenComponent
  ]
})
export class IconsModule { }
