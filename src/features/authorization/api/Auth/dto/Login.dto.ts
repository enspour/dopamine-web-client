import { UserSecurity } from "@interfaces";

export interface LoginDto {
    email: string;
    password: string;
    isRemember: boolean;
}

export interface LoginResponseDto {
    security: UserSecurity;
}
