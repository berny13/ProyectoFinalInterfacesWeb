import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({

    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule { }


