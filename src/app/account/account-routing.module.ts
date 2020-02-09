import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const accountRoutes : Routes = [{
    path:'',
    component : LoginComponent
},
{
    path:'register',
    component: RegisterComponent
}
];
@NgModule({
    imports: [
        RouterModule.forChild(accountRoutes)
    ],
    exports: [RouterModule]
})

export class AccountRoutingModule{};