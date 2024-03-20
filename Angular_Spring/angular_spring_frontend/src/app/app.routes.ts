import { Routes } from '@angular/router';
import { RegisterbookComponent } from './components/template_driven/registerbook/registerbook.component';
import { ListbookComponent } from './components/template_driven/listbook/listbook.component';

export const routes: Routes = [
    {
        path : 'registerbook', 
        component : RegisterbookComponent
    }, 
    {
        path : 'listbooks',
        component : ListbookComponent
    },
    {
        path : '',
        redirectTo : 'registerbook',
        pathMatch : 'full'
    }
];

