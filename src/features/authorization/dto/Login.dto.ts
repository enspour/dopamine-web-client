import { UserSecurity } from "@features/users";

export interface LoginDto {
    email: string;
    password: string;
    isRemember: boolean;
}

export interface LoginResponseDto {
    security: UserSecurity;
}
