import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Quote } from '../models';
export declare class QuoteRepository extends DefaultCrudRepository<Quote, typeof Quote.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
