export interface User {
    id: number;
    nickname: string;
    name: string;
    avatar: string;
    status: string;
    createdAt: Date;
    modifiedAt: Date;
}

export const getDefaultUser = (): User => ({
    id: 0,
    nickname: "",
    name: "",
    avatar: "",
    status: "",
    modifiedAt: new Date(),
    createdAt: new Date(),
});
