import { User } from "./types";


export interface userReducerIntialState{
    user:User | null,
    loading:boolean
}