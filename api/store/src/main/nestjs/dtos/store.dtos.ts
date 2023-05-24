import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql'
import { GraphQLScalarType } from 'graphql'

@ObjectType()
export class StoreOutPutDto {
    @Field()
    _id: string

    @Field()
    name: string

    @Field()
    title: string

    @Field()
    type: string

    @Field()
    amount:string

    @Field()
    description: string

    @Field(() => DetailsCustomScalar)
    details: Details

    @Field()
    price: number
}

type Details = {
    [key in string]: string | number | boolean
}

export const DetailsCustomScalar = new GraphQLScalarType({
    name: 'Details',
    description: 'Details about a product in database, it can has a loot of fieds',
})

@InputType()
export class StoreInputDto {
    @Field()
    name: string

    @Field({ nullable: true })
    title?: string

    @Field()
    type: string

    @Field()
    amount:number

    @Field({ nullable: true })
    description?: string

    @Field(() => DetailsCustomScalar, { nullable: true })
    details: Details

    @Field()
    price: number
}