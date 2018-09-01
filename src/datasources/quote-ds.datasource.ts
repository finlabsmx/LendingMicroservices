import {inject} from '@loopback/core';
import {juggler, AnyObject} from '@loopback/repository';
const config = require('./quote-ds.datasource.json');

export class QuoteDSDataSource extends juggler.DataSource {
  static dataSourceName = 'quoteDS';

  constructor(
    @inject('datasources.config.quoteDS', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
