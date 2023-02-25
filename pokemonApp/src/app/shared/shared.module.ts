import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages/pages.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
	declarations: [NavBarComponent, SideBarComponent],
	imports: [CommonModule, PagesModule],
	exports: [NavBarComponent, SideBarComponent],
})
export class SharedModule {}
