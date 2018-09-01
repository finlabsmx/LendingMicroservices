import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Quote} from '../models';
import {inject} from '@loopback/core';

export class QuoteRepository extends DefaultCrudRepository<
  Quote,
  typeof Quote.prototype.id> {
  constructor(
    @inject('datasources.quoteDS') protected datasource: juggler.DataSource,
  ) {
    super(Quote, datasource);
  }
}
