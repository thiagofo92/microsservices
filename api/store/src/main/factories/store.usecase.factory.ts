import { StoreUseCasePort } from "src/app/port/usecase/store.usecase";
import { StoreUseCase } from "src/app/usecase/store.usecase";
import { StoreRepositoryMemory } from "src/infra/repositories/store.repository.memory";

export function storeUseCaseFactory (): StoreUseCasePort {
    const repository = new StoreRepositoryMemory()
    const usecase = new StoreUseCase(repository)
    return usecase
} 