import { StoreEntity } from "src/core/entities/store.entity";
import { StoreRepositoryPort } from "../port/repositories/store.repository";
import { Database } from "./memory/database";


export class StoreRepositoryMemory implements StoreRepositoryPort {
    async findAll (): Promise<StoreEntity[]> {
        return Database
    }
    async findById(id: string): Promise<StoreEntity | null> {
        return Database.find(item => item._id === id)
    }

    async create (input: StoreEntity): Promise<void> {
        Database.push(input)
    }

    async getAmountById (id: string): Promise<StoreEntity | null> {
        return Database.find(item => item._id === id)
    }
}