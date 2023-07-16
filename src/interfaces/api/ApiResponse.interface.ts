import {
    ErrorResponseStatusCode,
    NetworkErrorResponseStatusCode,
    SuccessResponseStatusCode,
} from "@interfaces";

export interface SuccessResponse<T> {
    statusCode: SuccessResponseStatusCode;
    data: T;
}

export interface ErrorResponse {
    statusCode: ErrorResponseStatusCode;
    message: string;
    error: string;
}

export interface NetworkError {
    statusCode: NetworkErrorResponseStatusCode;
    message: string;
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse | NetworkError;
