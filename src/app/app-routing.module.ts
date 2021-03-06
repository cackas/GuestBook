import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { LoginPageComponent } from "./login-page/login-page.component";
import { AuthLyaoutComponent } from "./shared/layouts/auth-lyaout/auth-lyaout.component";
import { SiteLyaoutComponent } from "./shared/layouts/site-lyaout/site-lyaout.component";
import { RegisterPageComponent } from "./register-page/register-page.component";

const routes: Routes = [
    {
        path: '', component: AuthLyaoutComponent, children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: LoginPageComponent},
            {path: 'register', component: RegisterPageComponent}
        ]
    },
    {
        path: '', component: SiteLyaoutComponent, children: [
            
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {  
}