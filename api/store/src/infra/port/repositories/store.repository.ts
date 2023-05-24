import { StoreEntity } from "src/core/entities/store.entity"
import { StoreDto } from "src/dtos/store.dto"

export abstract class StoreRepositoryPort {
    findAll: () => Promise<StoreEntity[]>
    findById: (id: string) => Promise<StoreEntity | null>
    create: (input: StoreDto) => Promise<void>
    getAmountById: (id: string) => Promise<StoreEntity | null>
}