import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '\about', component: AboutComponent },
    { path: '\heroes', component: HeroesComponent },
 
];


export const app_routing=RouterModule.forRoot(routes)