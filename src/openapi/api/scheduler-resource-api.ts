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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common.ts';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base.ts';
// @ts-ignore
import type { AppointmentRequest } from '../models';
// @ts-ignore
import type { ProposedAppointment } from '../models';
// @ts-ignore
import type { ProspectRequest } from '../models';
// @ts-ignore
import type { ScheduledAppointment } from '../models';
// @ts-ignore
import type { TimeSlot } from '../models';
/**
 * SchedulerResourceApi - axios parameter creator
 * @export
 */
export const SchedulerResourceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} region 
         * @param {string} xScheduleVendor Vendor workflow
         * @param {string} [utmSource] UTM Source (theirs)
         * @param {string} [xScheduleEnvironment] Environment
         * @param {string} [xScheduleOrigin] Origin (ours)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scheduleResourceGetAvailability: async (region: string, xScheduleVendor: string, utmSource?: string, xScheduleEnvironment?: string, xScheduleOrigin?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'region' is not null or undefined
            assertParamExists('scheduleResourceGetAvailability', 'region', region)
            // verify required parameter 'xScheduleVendor' is not null or undefined
            assertParamExists('scheduleResourceGetAvailability', 'xScheduleVendor', xScheduleVendor)
            const localVarPath = `/availability`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication SecurityScheme required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            if (utmSource !== undefined) {
                localVarQueryParameter['utm_source'] = utmSource;
            }

            if (xScheduleEnvironment != null) {
                localVarHeaderParameter['X-Schedule-Environment'] = String(xScheduleEnvironment);
            }

            if (xScheduleOrigin != null) {
                localVarHeaderParameter['X-Schedule-Origin'] = String(xScheduleOrigin);
            }

            if (xScheduleVendor != null) {
                localVarHeaderParameter['X-Schedule-Vendor'] = String(xScheduleVendor);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} xScheduleVendor Vendor workflow
         * @param {string} [utmSource] UTM Source (theirs)
         * @param {string} [xScheduleEnvironment] Environment
         * @param {string} [xScheduleOrigin] Origin (ours)
         * @param {ProspectRequest} [prospectRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scheduleResourceProposeAppointment: async (xScheduleVendor: string, utmSource?: string, xScheduleEnvironment?: string, xScheduleOrigin?: string, prospectRequest?: ProspectRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xScheduleVendor' is not null or undefined
            assertParamExists('scheduleResourceProposeAppointment', 'xScheduleVendor', xScheduleVendor)
            const localVarPath = `/appointments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication SecurityScheme required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (utmSource !== undefined) {
                localVarQueryParameter['utm_source'] = utmSource;
            }

            if (xScheduleEnvironment != null) {
                localVarHeaderParameter['X-Schedule-Environment'] = String(xScheduleEnvironment);
            }

            if (xScheduleOrigin != null) {
                localVarHeaderParameter['X-Schedule-Origin'] = String(xScheduleOrigin);
            }

            if (xScheduleVendor != null) {
                localVarHeaderParameter['X-Schedule-Vendor'] = String(xScheduleVendor);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(prospectRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} xScheduleVendor Vendor workflow
         * @param {string} [utmSource] UTM Source (theirs)
         * @param {string} [xScheduleEnvironment] Environment
         * @param {string} [xScheduleOrigin] Origin (ours)
         * @param {AppointmentRequest} [appointmentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scheduleResourceScheduleAppointment: async (xScheduleVendor: string, utmSource?: string, xScheduleEnvironment?: string, xScheduleOrigin?: string, appointmentRequest?: AppointmentRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xScheduleVendor' is not null or undefined
            assertParamExists('scheduleResourceScheduleAppointment', 'xScheduleVendor', xScheduleVendor)
            const localVarPath = `/schedule`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication SecurityScheme required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (utmSource !== undefined) {
                localVarQueryParameter['utm_source'] = utmSource;
            }

            if (xScheduleEnvironment != null) {
                localVarHeaderParameter['X-Schedule-Environment'] = String(xScheduleEnvironment);
            }

            if (xScheduleOrigin != null) {
                localVarHeaderParameter['X-Schedule-Origin'] = String(xScheduleOrigin);
            }

            if (xScheduleVendor != null) {
                localVarHeaderParameter['X-Schedule-Vendor'] = String(xScheduleVendor);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(appointmentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SchedulerResourceApi - functional programming interface
 * @export
 */
export const SchedulerResourceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SchedulerResourceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} region 
         * @param {string} xScheduleVendor Vendor workflow
         * @param {string} [utmSource] UTM Source (theirs)
         * @param {string} [xScheduleEnvironment] Environment
         * @param {string} [xScheduleOrigin] Origin (ours)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async scheduleResourceGetAvailability(region: string, xScheduleVendor: string, utmSource?: string, xScheduleEnvironment?: string, xScheduleOrigin?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TimeSlot>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.scheduleResourceGetAvailability(region, xScheduleVendor, utmSource, xScheduleEnvironment, xScheduleOrigin, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SchedulerResourceApi.scheduleResourceGetAvailability']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} xScheduleVendor Vendor workflow
         * @param {string} [utmSource] UTM Source (theirs)
         * @param {string} [xScheduleEnvironment] Environment
         * @param {string} [xScheduleOrigin] Origin (ours)
         * @param {ProspectRequest} [prospectRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async scheduleResourceProposeAppointment(xScheduleVendor: string, utmSource?: string, xScheduleEnvironment?: string, xScheduleOrigin?: string, prospectRequest?: ProspectRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProposedAppointment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.scheduleResourceProposeAppointment(xScheduleVendor, utmSource, xScheduleEnvironment, xScheduleOrigin, prospectRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SchedulerResourceApi.scheduleResourceProposeAppointment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} xScheduleVendor Vendor workflow
         * @param {string} [utmSource] UTM Source (theirs)
         * @param {string} [xScheduleEnvironment] Environment
         * @param {string} [xScheduleOrigin] Origin (ours)
         * @param {AppointmentRequest} [appointmentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async scheduleResourceScheduleAppointment(xScheduleVendor: string, utmSource?: string, xScheduleEnvironment?: string, xScheduleOrigin?: string, appointmentRequest?: AppointmentRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScheduledAppointment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.scheduleResourceScheduleAppointment(xScheduleVendor, utmSource, xScheduleEnvironment, xScheduleOrigin, appointmentRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SchedulerResourceApi.scheduleResourceScheduleAppointment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SchedulerResourceApi - factory interface
 * @export
 */
export const SchedulerResourceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SchedulerResourceApiFp(configuration)
    return {
        /**
         * 
         * @param {SchedulerResourceApiScheduleResourceGetAvailabilityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scheduleResourceGetAvailability(requestParameters: SchedulerResourceApiScheduleResourceGetAvailabilityRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<TimeSlot>> {
            return localVarFp.scheduleResourceGetAvailability(requestParameters.region, requestParameters.xScheduleVendor, requestParameters.utmSource, requestParameters.xScheduleEnvironment, requestParameters.xScheduleOrigin, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SchedulerResourceApiScheduleResourceProposeAppointmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scheduleResourceProposeAppointment(requestParameters: SchedulerResourceApiScheduleResourceProposeAppointmentRequest, options?: RawAxiosRequestConfig): AxiosPromise<ProposedAppointment> {
            return localVarFp.scheduleResourceProposeAppointment(requestParameters.xScheduleVendor, requestParameters.utmSource, requestParameters.xScheduleEnvironment, requestParameters.xScheduleOrigin, requestParameters.prospectRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SchedulerResourceApiScheduleResourceScheduleAppointmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scheduleResourceScheduleAppointment(requestParameters: SchedulerResourceApiScheduleResourceScheduleAppointmentRequest, options?: RawAxiosRequestConfig): AxiosPromise<ScheduledAppointment> {
            return localVarFp.scheduleResourceScheduleAppointment(requestParameters.xScheduleVendor, requestParameters.utmSource, requestParameters.xScheduleEnvironment, requestParameters.xScheduleOrigin, requestParameters.appointmentRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for scheduleResourceGetAvailability operation in SchedulerResourceApi.
 * @export
 * @interface SchedulerResourceApiScheduleResourceGetAvailabilityRequest
 */
export interface SchedulerResourceApiScheduleResourceGetAvailabilityRequest {
    /**
     * 
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceGetAvailability
     */
    readonly region: string

    /**
     * Vendor workflow
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceGetAvailability
     */
    readonly xScheduleVendor: string

    /**
     * UTM Source (theirs)
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceGetAvailability
     */
    readonly utmSource?: string

    /**
     * Environment
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceGetAvailability
     */
    readonly xScheduleEnvironment?: string

    /**
     * Origin (ours)
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceGetAvailability
     */
    readonly xScheduleOrigin?: string
}

/**
 * Request parameters for scheduleResourceProposeAppointment operation in SchedulerResourceApi.
 * @export
 * @interface SchedulerResourceApiScheduleResourceProposeAppointmentRequest
 */
export interface SchedulerResourceApiScheduleResourceProposeAppointmentRequest {
    /**
     * Vendor workflow
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceProposeAppointment
     */
    readonly xScheduleVendor: string

    /**
     * UTM Source (theirs)
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceProposeAppointment
     */
    readonly utmSource?: string

    /**
     * Environment
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceProposeAppointment
     */
    readonly xScheduleEnvironment?: string

    /**
     * Origin (ours)
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceProposeAppointment
     */
    readonly xScheduleOrigin?: string

    /**
     * 
     * @type {ProspectRequest}
     * @memberof SchedulerResourceApiScheduleResourceProposeAppointment
     */
    readonly prospectRequest?: ProspectRequest
}

/**
 * Request parameters for scheduleResourceScheduleAppointment operation in SchedulerResourceApi.
 * @export
 * @interface SchedulerResourceApiScheduleResourceScheduleAppointmentRequest
 */
export interface SchedulerResourceApiScheduleResourceScheduleAppointmentRequest {
    /**
     * Vendor workflow
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceScheduleAppointment
     */
    readonly xScheduleVendor: string

    /**
     * UTM Source (theirs)
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceScheduleAppointment
     */
    readonly utmSource?: string

    /**
     * Environment
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceScheduleAppointment
     */
    readonly xScheduleEnvironment?: string

    /**
     * Origin (ours)
     * @type {string}
     * @memberof SchedulerResourceApiScheduleResourceScheduleAppointment
     */
    readonly xScheduleOrigin?: string

    /**
     * 
     * @type {AppointmentRequest}
     * @memberof SchedulerResourceApiScheduleResourceScheduleAppointment
     */
    readonly appointmentRequest?: AppointmentRequest
}

/**
 * SchedulerResourceApi - object-oriented interface
 * @export
 * @class SchedulerResourceApi
 * @extends {BaseAPI}
 */
export class SchedulerResourceApi extends BaseAPI {
    /**
     * 
     * @param {SchedulerResourceApiScheduleResourceGetAvailabilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerResourceApi
     */
    public scheduleResourceGetAvailability(requestParameters: SchedulerResourceApiScheduleResourceGetAvailabilityRequest, options?: RawAxiosRequestConfig) {
        return SchedulerResourceApiFp(this.configuration).scheduleResourceGetAvailability(requestParameters.region, requestParameters.xScheduleVendor, requestParameters.utmSource, requestParameters.xScheduleEnvironment, requestParameters.xScheduleOrigin, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SchedulerResourceApiScheduleResourceProposeAppointmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerResourceApi
     */
    public scheduleResourceProposeAppointment(requestParameters: SchedulerResourceApiScheduleResourceProposeAppointmentRequest, options?: RawAxiosRequestConfig) {
        return SchedulerResourceApiFp(this.configuration).scheduleResourceProposeAppointment(requestParameters.xScheduleVendor, requestParameters.utmSource, requestParameters.xScheduleEnvironment, requestParameters.xScheduleOrigin, requestParameters.prospectRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SchedulerResourceApiScheduleResourceScheduleAppointmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerResourceApi
     */
    public scheduleResourceScheduleAppointment(requestParameters: SchedulerResourceApiScheduleResourceScheduleAppointmentRequest, options?: RawAxiosRequestConfig) {
        return SchedulerResourceApiFp(this.configuration).scheduleResourceScheduleAppointment(requestParameters.xScheduleVendor, requestParameters.utmSource, requestParameters.xScheduleEnvironment, requestParameters.xScheduleOrigin, requestParameters.appointmentRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

