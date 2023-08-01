import { UserEmail } from "@interfaces";

export interface UserEmailsAddDto {
    email: string;
}

export interface UserEmailsAddResponseDto {
    email: UserEmail;
}

export interface UserEmailsConfirmDto {
    emailId: number;
    code: string;
}

export interface UserEmailsGetAllResponseDto {
    emails: UserEmail[];
}
