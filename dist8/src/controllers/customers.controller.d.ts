import { Filter, Where } from '@loopback/repository';
import { Customer } from '../models';
import { CustomerRepository } from '../repositories';
export declare class CustomersController {
    customerRepository: CustomerRepository;
    constructor(customerRepository: CustomerRepository);
    create(customers: Customer): Promise<Customer>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<Customer[]>;
    updateAll(customers: Customer, where?: Where): Promise<number>;
    findById(id: string): Promise<Customer>;
    updateById(id: string, customers: Customer): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
