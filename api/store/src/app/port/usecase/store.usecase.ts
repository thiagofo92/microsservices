import { StoreDto } from "src/dtos/store.dto";

export abstract class StoreUseCasePort {
    findAll: () => Promise<StoreDto[]>
    findById: (id: string) => Promise<StoreDto>
    create: (input: StoreDto) => Promise<void>
    getAmountById: (id: string) => Promise<StoreDto>
}