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
import type { RequestRow } from './request-row';

/**
 * 
 * @export
 * @interface RequestPage
 */
export interface RequestPage {
    /**
     * 
     * @type {number}
     * @memberof RequestPage
     */
    'size'?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestPage
     */
    'pages'?: number;
    /**
     * 
     * @type {Array<RequestRow>}
     * @memberof RequestPage
     */
    'records'?: Array<RequestRow>;
}

