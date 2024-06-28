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
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { AppointmentDetail } from '../models';
// @ts-ignore
import type { AppointmentPage } from '../models';
// @ts-ignore
import type { ErrorPage } from '../models';
// @ts-ignore
import type { RequestDetail } from '../models';
// @ts-ignore
import type { RequestPage } from '../models';
/**
 * AnalyticsResourceApi - axios parameter creator
 * @export
 */
export const AnalyticsResourceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetAppointment: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('analyticsResourceGetAppointment', 'id', id)
            const localVarPath = `/appointments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetAppointments: async (page?: number, size?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/appointments`;
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
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
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetErrors: async (page?: number, size?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/errors`;
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
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
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetRequest: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('analyticsResourceGetRequest', 'id', id)
            const localVarPath = `/requests/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetRequests: async (page?: number, size?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/requests`;
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AnalyticsResourceApi - functional programming interface
 * @export
 */
export const AnalyticsResourceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AnalyticsResourceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsResourceGetAppointment(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppointmentDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsResourceGetAppointment(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsResourceApi.analyticsResourceGetAppointment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsResourceGetAppointments(page?: number, size?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppointmentPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsResourceGetAppointments(page, size, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsResourceApi.analyticsResourceGetAppointments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsResourceGetErrors(page?: number, size?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ErrorPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsResourceGetErrors(page, size, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsResourceApi.analyticsResourceGetErrors']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsResourceGetRequest(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsResourceGetRequest(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsResourceApi.analyticsResourceGetRequest']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsResourceGetRequests(page?: number, size?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsResourceGetRequests(page, size, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsResourceApi.analyticsResourceGetRequests']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AnalyticsResourceApi - factory interface
 * @export
 */
export const AnalyticsResourceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AnalyticsResourceApiFp(configuration)
    return {
        /**
         * 
         * @param {AnalyticsResourceApiAnalyticsResourceGetAppointmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetAppointment(requestParameters: AnalyticsResourceApiAnalyticsResourceGetAppointmentRequest, options?: RawAxiosRequestConfig): AxiosPromise<AppointmentDetail> {
            return localVarFp.analyticsResourceGetAppointment(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AnalyticsResourceApiAnalyticsResourceGetAppointmentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetAppointments(requestParameters: AnalyticsResourceApiAnalyticsResourceGetAppointmentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AppointmentPage> {
            return localVarFp.analyticsResourceGetAppointments(requestParameters.page, requestParameters.size, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AnalyticsResourceApiAnalyticsResourceGetErrorsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetErrors(requestParameters: AnalyticsResourceApiAnalyticsResourceGetErrorsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ErrorPage> {
            return localVarFp.analyticsResourceGetErrors(requestParameters.page, requestParameters.size, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AnalyticsResourceApiAnalyticsResourceGetRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetRequest(requestParameters: AnalyticsResourceApiAnalyticsResourceGetRequestRequest, options?: RawAxiosRequestConfig): AxiosPromise<RequestDetail> {
            return localVarFp.analyticsResourceGetRequest(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AnalyticsResourceApiAnalyticsResourceGetRequestsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsResourceGetRequests(requestParameters: AnalyticsResourceApiAnalyticsResourceGetRequestsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RequestPage> {
            return localVarFp.analyticsResourceGetRequests(requestParameters.page, requestParameters.size, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for analyticsResourceGetAppointment operation in AnalyticsResourceApi.
 * @export
 * @interface AnalyticsResourceApiAnalyticsResourceGetAppointmentRequest
 */
export interface AnalyticsResourceApiAnalyticsResourceGetAppointmentRequest {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsResourceApiAnalyticsResourceGetAppointment
     */
    readonly id: string
}

/**
 * Request parameters for analyticsResourceGetAppointments operation in AnalyticsResourceApi.
 * @export
 * @interface AnalyticsResourceApiAnalyticsResourceGetAppointmentsRequest
 */
export interface AnalyticsResourceApiAnalyticsResourceGetAppointmentsRequest {
    /**
     * 
     * @type {number}
     * @memberof AnalyticsResourceApiAnalyticsResourceGetAppointments
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof AnalyticsResourceApiAnalyticsResourceGetAppointments
     */
    readonly size?: number
}

/**
 * Request parameters for analyticsResourceGetErrors operation in AnalyticsResourceApi.
 * @export
 * @interface AnalyticsResourceApiAnalyticsResourceGetErrorsRequest
 */
export interface AnalyticsResourceApiAnalyticsResourceGetErrorsRequest {
    /**
     * 
     * @type {number}
     * @memberof AnalyticsResourceApiAnalyticsResourceGetErrors
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof AnalyticsResourceApiAnalyticsResourceGetErrors
     */
    readonly size?: number
}

/**
 * Request parameters for analyticsResourceGetRequest operation in AnalyticsResourceApi.
 * @export
 * @interface AnalyticsResourceApiAnalyticsResourceGetRequestRequest
 */
export interface AnalyticsResourceApiAnalyticsResourceGetRequestRequest {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsResourceApiAnalyticsResourceGetRequest
     */
    readonly id: string
}

/**
 * Request parameters for analyticsResourceGetRequests operation in AnalyticsResourceApi.
 * @export
 * @interface AnalyticsResourceApiAnalyticsResourceGetRequestsRequest
 */
export interface AnalyticsResourceApiAnalyticsResourceGetRequestsRequest {
    /**
     * 
     * @type {number}
     * @memberof AnalyticsResourceApiAnalyticsResourceGetRequests
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof AnalyticsResourceApiAnalyticsResourceGetRequests
     */
    readonly size?: number
}

/**
 * AnalyticsResourceApi - object-oriented interface
 * @export
 * @class AnalyticsResourceApi
 * @extends {BaseAPI}
 */
export class AnalyticsResourceApi extends BaseAPI {
    /**
     * 
     * @param {AnalyticsResourceApiAnalyticsResourceGetAppointmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsResourceApi
     */
    public analyticsResourceGetAppointment(requestParameters: AnalyticsResourceApiAnalyticsResourceGetAppointmentRequest, options?: RawAxiosRequestConfig) {
        return AnalyticsResourceApiFp(this.configuration).analyticsResourceGetAppointment(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AnalyticsResourceApiAnalyticsResourceGetAppointmentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsResourceApi
     */
    public analyticsResourceGetAppointments(requestParameters: AnalyticsResourceApiAnalyticsResourceGetAppointmentsRequest = {}, options?: RawAxiosRequestConfig) {
        return AnalyticsResourceApiFp(this.configuration).analyticsResourceGetAppointments(requestParameters.page, requestParameters.size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AnalyticsResourceApiAnalyticsResourceGetErrorsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsResourceApi
     */
    public analyticsResourceGetErrors(requestParameters: AnalyticsResourceApiAnalyticsResourceGetErrorsRequest = {}, options?: RawAxiosRequestConfig) {
        return AnalyticsResourceApiFp(this.configuration).analyticsResourceGetErrors(requestParameters.page, requestParameters.size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AnalyticsResourceApiAnalyticsResourceGetRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsResourceApi
     */
    public analyticsResourceGetRequest(requestParameters: AnalyticsResourceApiAnalyticsResourceGetRequestRequest, options?: RawAxiosRequestConfig) {
        return AnalyticsResourceApiFp(this.configuration).analyticsResourceGetRequest(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AnalyticsResourceApiAnalyticsResourceGetRequestsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsResourceApi
     */
    public analyticsResourceGetRequests(requestParameters: AnalyticsResourceApiAnalyticsResourceGetRequestsRequest = {}, options?: RawAxiosRequestConfig) {
        return AnalyticsResourceApiFp(this.configuration).analyticsResourceGetRequests(requestParameters.page, requestParameters.size, options).then((request) => request(this.axios, this.basePath));
    }
}
