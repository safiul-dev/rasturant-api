import { Document } from "mongoose";

export interface WorkPeriod extends Document{

    id: string,
    userId: string,
    uniq: string,
    storeUniq: string,
    startedAt: string,
    endedAt: string,
    createdAt: string
}