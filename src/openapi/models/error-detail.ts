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



/**
 * 
 * @export
 * @interface ErrorDetail
 */
export interface ErrorDetail {
    /**
     * 
     * @type {string}
     * @memberof ErrorDetail
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetail
     */
    'client'?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetail
     */
    'path'?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetail
     */
    'ip'?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetail
     */
    'timestamp'?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetail
     */
    'message'?: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorDetail
     */
    'status'?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetail
     */
    'requestId'?: string;
}

