import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';;
import { ListbuilderComponent } from './Pages/listbuilder/listbuilder.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'listbuilder', component: ListbuilderComponent},
];
