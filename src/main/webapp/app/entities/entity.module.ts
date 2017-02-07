import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Empjhip402CompanyModule } from './company/company.module';
import { Empjhip402DepartmentModule } from './department/department.module';
import { Empjhip402EmployeeModule } from './employee/employee.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Empjhip402CompanyModule,
        Empjhip402DepartmentModule,
        Empjhip402EmployeeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Empjhip402EntityModule {}
