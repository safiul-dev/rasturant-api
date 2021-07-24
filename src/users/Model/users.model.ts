import { Document } from "mongoose"

export interface User extends Document{
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    mobile: string;
    password: string;
}