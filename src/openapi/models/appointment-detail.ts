/* tslint:disable */
/* eslint-disable */
/**
 * Scheduler API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AppointmentStep } from './appointment-step';
// May contain unused imports in some cases
// @ts-ignore
import type { ErrorDetail } from './error-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { RequestDetail } from './request-detail';

/**
 * 
 * @export
 * @interface AppointmentDetail
 */
export interface AppointmentDetail {
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'client'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'created'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppointmentDetail
     */
    'homeowner'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'region'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'state'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'stage'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'zip'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'appointmentDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'appointmentTime'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppointmentDetail
     */
    'success'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'address'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'comments'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'contact'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'leadId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'notes'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'appointmentId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'prospectId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'slotId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'utmSource'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'sourceId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentDetail
     */
    'sourceType'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppointmentDetail
     */
    'components'?: Array<string>;
    /**
     * 
     * @type {Array<RequestDetail>}
     * @memberof AppointmentDetail
     */
    'requests'?: Array<RequestDetail>;
    /**
     * 
     * @type {Array<ErrorDetail>}
     * @memberof AppointmentDetail
     */
    'errors'?: Array<ErrorDetail>;
    /**
     * 
     * @type {{ [key: string]: AppointmentStep | undefined; }}
     * @memberof AppointmentDetail
     */
    'steps'?: { [key: string]: AppointmentStep | undefined; };
}

