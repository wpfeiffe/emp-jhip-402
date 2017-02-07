import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentPopupComponent } from './department-dialog.component';
import { DepartmentDeletePopupComponent } from './department-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DepartmentResolvePagingParams implements Resolve<any> {

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

export const departmentRoute: Routes = [
  {
    path: 'department',
    component: DepartmentComponent,
    resolve: {
      'pagingParams': DepartmentResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.department.home.title'
    }
  }, {
    path: 'department/:id',
    component: DepartmentDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.department.home.title'
    }
  }
];

export const departmentPopupRoute: Routes = [
  {
    path: 'department-new',
    component: DepartmentPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.department.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'department/:id/edit',
    component: DepartmentPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.department.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'department/:id/delete',
    component: DepartmentDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'empjhip402App.department.home.title'
    },
    outlet: 'popup'
  }
];
