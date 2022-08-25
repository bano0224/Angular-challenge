import { RouterModule, Routes } from "@angular/router";
import { ProfesionalComponent } from './components/profesional/profesional.component';
import { FormProfesionalComponent } from './components/form-profesional/form-profesional.component';


const APP_ROUTES: Routes = [
    {path: "profesional", component: ProfesionalComponent},
    {path: "form", component: FormProfesionalComponent},
    {path: "**", pathMatch: "full", redirectTo: "profesional"}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);