import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Customer} from '../models';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id> {
  constructor(
    @inject('datasources.customerDS') protected datasource: juggler.DataSource,
  ) {
    super(Customer, datasource);
  }
}
