import { StoreEntity } from "src/core/entities/store.entity";
import { StoreUseCasePort } from "../port/usecase/store.usecase";
import { StoreRepositoryPort } from "src/infra/port/repositories/store.repository";
import { StoreDto } from "src/dtos/store.dto";

export class StoreUseCase implements StoreUseCasePort {
    constructor(private readonly repository: StoreRepositoryPort) {}

    async findAll ():  Promise<StoreEntity[]> {
        return await this.repository.findAll() as any
    }
    async findById (id: string): Promise<StoreEntity> {
        return await this.repository.findById(id)
    }
    async create (input: StoreDto): Promise<void> {
        return await this.repository.create(input)
    }

    async getAmountById (id: string): Promise<StoreEntity> {
        return await this.repository.getAmountById(id)
    }
}