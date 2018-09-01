import {inject} from '@loopback/core';
import {juggler, AnyObject} from '@loopback/repository';
const config = require('./customer-ds.datasource.json');

export class CustomerDSDataSource extends juggler.DataSource {
  static dataSourceName = 'customerDS';

  constructor(
    @inject('datasources.config.customerDS', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
