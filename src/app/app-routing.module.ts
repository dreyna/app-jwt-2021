import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { TareasComponent } from "./compoments/tareas/tareas.component";
import { PrivateTareasComponent } from "./compoments/private-tareas/private-tareas.component";
import { SigninComponent } from "./compoments/signin/signin.component";
import { SignupComponent } from "./compoments/signup/signup.component";
import { AuthGuard } from "./auth.guard";
const routes: Routes=[
    {path :  '', redirectTo : '/tareas', pathMatch: 'full'},
    {path :  'tareas', component : TareasComponent},
    {path :  'private', component: PrivateTareasComponent,
    canActivate: [AuthGuard]},
    {path :  'signin', component: SigninComponent},
    {path :  'signup', component: SignupComponent},
    {path :  '**', component: TareasComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}