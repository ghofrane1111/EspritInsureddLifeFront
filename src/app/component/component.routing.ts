import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { RiskManagementComponent } from './RiskManagement/RiskManagement.component';

import { NgbdDropdownBasicComponent } from './DonationManagement/donation.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './Loan Management/LoanManagement.component';
import { NgbdButtonsComponent } from './ContractManagement/ContractManagement.component';
import { CardsComponent } from './ComplaintManagement/complaint.component';
import { TableComponent } from './User/User.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'badges',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: RiskManagementComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'buttons',
				component: NgbdButtonsComponent
			}
		]
	}
];
