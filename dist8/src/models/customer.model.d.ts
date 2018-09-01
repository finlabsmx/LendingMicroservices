import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    id: string;
    firstName1: string;
    firstName2?: string;
    lastName1: string;
    lastName2?: string;
    fiscalID?: string;
    nationalID?: string;
    email: string;
    mobilePhone?: string;
    constructor(data?: Partial<Customer>);
}
