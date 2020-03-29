import { ErrorComponent } from './error';
import { HeaderComponent } from './header';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
    exports: [
        HeaderComponent,
        ErrorComponent],
    declarations: [
        HeaderComponent,
        ErrorComponent],
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [],
})
export class CoreModule {
}
