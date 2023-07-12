import { UserEmail } from "@interfaces";

export interface EmailsAddDto {
    email: string;
}

export interface EmailsAddResponseDto {
    email: UserEmail;
}

export interface EmailsConfirmDto {
    emailId: number;
    code: string;
}

export interface EmailsGetAllResponseDto {
    emails: UserEmail[];
}
