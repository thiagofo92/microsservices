import { Module } from '@nestjs/common';
import { StoreResolver } from './store/store.resolver';
import { StoreUseCasePort } from 'src/app/port/usecase/store.usecase';
import { StoreUseCase } from 'src/app/usecase/store.usecase';
import { storeUseCaseFactory } from 'src/main/factories/store.usecase.factory';
import { GraphQLModule } from '@nestjs/graphql';
import { DetailsCustomScalar } from '../dtos/store.dtos';

@Module({
    providers: [StoreResolver, {
         provide: StoreUseCasePort,
         useFactory: storeUseCaseFactory
    }]
})
export class ResolversModule {}
