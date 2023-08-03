export interface SignupDto {
    nickname: string;
    email: string;
    password: string;
}

export interface SignupConfirmEmailDto {
    email: string;
    password: string;
    code: string;
}

export interface SignupResendEmailDto {
    email: string;
    password: string;
}
