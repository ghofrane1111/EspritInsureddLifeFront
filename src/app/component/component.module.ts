import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { RiskManagementComponent } from './RiskManagement/RiskManagement.component';
import { NgbdDropdownBasicComponent } from './DonationManagement/donation.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { NgbdButtonsComponent } from './ContractManagement/ContractManagement.component';
import { CardsComponent } from './ComplaintManagement/complaint.component';
import { TableComponent } from "./User/User.component";
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { OAuth2RedirectComponent } from './User/oauth2-redirect/oauth2-redirect.component';
import { ForgotpasswordComponent } from './User/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './User/resetpassword/resetpassword.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdpaginationBasicComponent,
    RiskManagementComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    NgbdButtonsComponent,
    CardsComponent,
    TableComponent
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    OAuth2RedirectComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    UserProfileComponent
  ],
})
export class ComponentsModule { }
