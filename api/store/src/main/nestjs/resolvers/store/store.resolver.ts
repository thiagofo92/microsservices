import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreUseCasePort } from 'src/app/port/usecase/store.usecase';
import { StoreInputDto, StoreOutPutDto } from '../../dtos/store.dtos';
import { StoreDto } from 'src/dtos/store.dto';

@Resolver()
export class StoreResolver {
    constructor(private readonly usecase: StoreUseCasePort ) {}

    @Query(() => [StoreOutPutDto])
    async findAll() {
        return await this.usecase.findAll()
    }

    @Query(() => StoreOutPutDto)
    async findById(@Args('id') id: string) {
        return await this.usecase.findById(id)
    }

    @Query(() => StoreOutPutDto) 
    async getAmountById(@Args('id') id: string) {
        return await this.usecase.getAmountById(id)
    }

    @Mutation(() => Boolean)
    async create(@Args('data') input: StoreInputDto) {
        const store: StoreDto = {
            name: input.name,
            amount: input.amount,
            description: input.description,
            details: input.details,
            price: input.price,
            title: input.title,
            type: input.type
        }
        
        await this.usecase.create(store)
        return true
    }
}
