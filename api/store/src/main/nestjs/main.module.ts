import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from "path";
import { ResolversModule } from './resolvers/resolvers.module';
import { DetailsCustomScalar } from "./dtos/store.dtos";
@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            resolvers: {
                Details: DetailsCustomScalar
            },
            driver:ApolloDriver,
            autoSchemaFile: join(__dirname, '..', 'schema.gql')
        }),
        ResolversModule
    ]
})
export class MainModule{}