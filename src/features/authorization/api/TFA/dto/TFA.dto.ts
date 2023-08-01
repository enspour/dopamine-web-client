export interface TFAConfirmByEmailDto {
    email: string;
    password: string;
    code: string;
}

export interface TFAResendEmailDto {
    email: string;
    password: string;
}
