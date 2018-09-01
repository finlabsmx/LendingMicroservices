import { Filter, Where } from '@loopback/repository';
import { Quote } from '../models';
import { QuoteRepository } from '../repositories';
export declare class QuotesController {
    quoteRepository: QuoteRepository;
    constructor(quoteRepository: QuoteRepository);
    create(quotes: Quote): Promise<Quote>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<Quote[]>;
    updateAll(quotes: Quote, where?: Where): Promise<number>;
    findById(id: string): Promise<Quote>;
    updateById(id: string, quotes: Quote): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
