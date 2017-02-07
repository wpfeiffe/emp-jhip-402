import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Department } from './department.model';
import { DepartmentPopupService } from './department-popup.service';
import { DepartmentService } from './department.service';
import { Company, CompanyService } from '../company';
@Component({
    selector: 'jhi-department-dialog',
    templateUrl: './department-dialog.component.html'
})
export class DepartmentDialogComponent implements OnInit {

    department: Department;
    authorities: any[];
    isSaving: boolean;

    companies: Company[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private departmentService: DepartmentService,
        private companyService: CompanyService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['department']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.companyService.query().subscribe(
            (res: Response) => { this.companies = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.department.id !== undefined) {
            this.departmentService.update(this.department)
                .subscribe((res: Department) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.departmentService.create(this.department)
                .subscribe((res: Department) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Department) {
        this.eventManager.broadcast({ name: 'departmentListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }

    trackCompanyById(index: number, item: Company) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-department-popup',
    template: ''
})
export class DepartmentPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private departmentPopupService: DepartmentPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.departmentPopupService
                    .open(DepartmentDialogComponent, params['id']);
            } else {
                this.modalRef = this.departmentPopupService
                    .open(DepartmentDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
