import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeePopupComponent } from './employee-dialog.component';
import { EmployeeDeletePopupComponent } from './employee-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class EmployeeResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const employeeRoute: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    resolve: {
      'pagingParams': EmployeeResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.employee.home.title'
    }
  }, {
    path: 'employee/:id',
    component: EmployeeDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.employee.home.title'
    }
  }
];

export const employeePopupRoute: Routes = [
  {
    path: 'employee-new',
    component: EmployeePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.employee.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'employee/:id/edit',
    component: EmployeePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.employee.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'employee/:id/delete',
    component: EmployeeDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.employee.home.title'
    },
    outlet: 'popup'
  }
];
