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
import { IconUserGearComponent } from './components/icon-user-gear/icon-user-gear.component';
import { IconUserComponent } from './components/icon-user/icon-user.component';
import { IconAddressCardComponent } from './components/icon-address-card/icon-address-card.component';
import { IconCartShoppingComponent } from './components/icon-cart-shopping/icon-cart-shopping.component';
import { IconProductMenuComponent } from './components/icon-product-menu/icon-product-menu.component';
import { IconStatsComponent } from './components/icon-stats/icon-stats.component';
import { IconLogoutComponent } from './components/icon-logout/icon-logout.component';



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
    IconFolderOpenComponent,
    IconUserGearComponent,
    IconUserComponent,
    IconAddressCardComponent,
    IconCartShoppingComponent,
    IconProductMenuComponent,
    IconStatsComponent,
    IconLogoutComponent
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
    IconFolderOpenComponent,
    IconUserGearComponent,
    IconUserComponent,
    IconAddressCardComponent,
    IconCartShoppingComponent,
    IconProductMenuComponent,
    IconStatsComponent,
    IconLogoutComponent
  ]
})
export class IconsModule { }
