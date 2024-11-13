
/**
* Description.
* This spec file was created using ng-test-barrel plugin!
*
*/

import { Component,OnDestroy,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import { _ } from 'lodash';
import { PageEvent } from '@angular/material/paginator';
import { EventService } from '@sunbird-cb/utils';
import { NsContent } from '@sunbird-cb/collection';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { NSProfileDataV2 } from '../../../models/profile-v2.model';
import { UsersService } from '../../../../users/services/users.service';
import { LoaderService } from '../../../../../../../../../../src/app/services/loader.service';
import { TelemetryEvents } from '../../../../../head/_services/telemetry.event.model';
import { ProfileV2UtillService } from '../../../services/home-utill.service';
import { ReportsVideoComponent } from '../../reports-video/reports-video.component';

describe('AllUsersComponent', () => {
    let component: AllUsersComponent;

    const dialog :Partial<MatDialog> ={};
	const route :Partial<ActivatedRoute> ={};
	const router :Partial<Router> ={};
	const events :Partial<EventService> ={};
	const loaderService :Partial<LoaderService> ={};
	const profileUtilSvc :Partial<ProfileV2UtillService> ={};
	const sanitizer :Partial<DomSanitizer> ={};
	const usersService :Partial<UsersService> ={};

    beforeAll(() => {
        component = new AllUsersComponent(
            dialog as MatDialog,
			route as ActivatedRoute,
			router as Router,
			events as EventService,
			loaderService as LoaderService,
			profileUtilSvc as ProfileV2UtillService,
			sanitizer as DomSanitizer,
			usersService as UsersService
        )
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
    });
            
    it('should create a instance of component', () => {
        expect(component).toBeTruthy();
    });
});