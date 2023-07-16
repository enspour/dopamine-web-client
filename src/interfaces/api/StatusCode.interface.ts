export const successResponseStatusCodes = [200, 201, 202] as const;

export type SuccessResponseStatusCode =
    (typeof successResponseStatusCodes)[number];

export const errorResponseStatusCodes = [400, 401, 403, 404, 500] as const;

export type ErrorResponseStatusCode = (typeof errorResponseStatusCodes)[number];

export const networkErrorResponseStatusCodes = [0] as const; // Network Error, Aborted Request, Timeout error

export type NetworkErrorResponseStatusCode =
    (typeof networkErrorResponseStatusCodes)[number];
