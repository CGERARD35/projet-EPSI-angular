import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from "@angular/router";
import {IconsModule} from "../icons/icons.module";

@NgModule({
    declarations: [
      MenuComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        IconsModule,

    ],
    exports:[
      MenuComponent
    ]
})
export class SharedModule { }
