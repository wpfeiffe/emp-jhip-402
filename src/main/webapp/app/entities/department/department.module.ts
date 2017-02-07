import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Empjhip402SharedModule } from '../../shared';

import {
    DepartmentService,
    DepartmentPopupService,
    DepartmentComponent,
    DepartmentDetailComponent,
    DepartmentDialogComponent,
    DepartmentPopupComponent,
    DepartmentDeletePopupComponent,
    DepartmentDeleteDialogComponent,
    departmentRoute,
    departmentPopupRoute,
    DepartmentResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...departmentRoute,
    ...departmentPopupRoute,
];

@NgModule({
    imports: [
        Empjhip402SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DepartmentComponent,
        DepartmentDetailComponent,
        DepartmentDialogComponent,
        DepartmentDeleteDialogComponent,
        DepartmentPopupComponent,
        DepartmentDeletePopupComponent,
    ],
    entryComponents: [
        DepartmentComponent,
        DepartmentDialogComponent,
        DepartmentPopupComponent,
        DepartmentDeleteDialogComponent,
        DepartmentDeletePopupComponent,
    ],
    providers: [
        DepartmentService,
        DepartmentPopupService,
        DepartmentResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Empjhip402DepartmentModule {}
