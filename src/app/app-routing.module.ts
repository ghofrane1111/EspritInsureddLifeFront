import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/User/login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { SignupComponent } from './component/User/signup/signup.component';
import { OAuth2RedirectComponent } from './component/User/oauth2-redirect/oauth2-redirect.component';
import { ForgotpasswordComponent } from './component/User/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/User/resetpassword/resetpassword.component';
import { UserProfileComponent } from './component/User/user-profile/user-profile.component';
import { QrLoginComponent } from './component/User/qr-login/qr-login.component';

export const Approutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'signup', component: SignupComponent },
  { path: 'qr-login', component: QrLoginComponent },
  
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'user-profile',
        component: UserProfileComponent
      }
      
      
    ]
    
  },
  { path: 'oauth2/redirect', component: OAuth2RedirectComponent }, // <-- Cette ligne doit être avant le wildcard '**'
  { path: 'forgot-password', component: ForgotpasswordComponent },
  
  // Route pour réinitialisation du mot de passe
  { path: 'reset-password', component: ResetpasswordComponent },
  {
    path: '**',
    redirectTo: 'login'
  }
  
];
