import UserEmail from "./UserEmail.interface";
import UserSecurity from "./UserSecurity.interface";

export default interface User {
    id: number;
    nickname: string;
    name: string;
    avatar: string;
    status: string;
    emails: UserEmail[];
    security: UserSecurity;
    created_at: Date;
    modified_at: Date;
}
