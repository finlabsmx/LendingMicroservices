import {Filter, Where, repository} from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import {Customer} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomersController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository : CustomerRepository,
  ) {}

  @post('/customers')
  async create(@requestBody() customers: Customer)
    : Promise<Customer> {
    return await this.customerRepository.create(customers);
  }

  @get('/customers/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.customerRepository.count(where);
  }

  @get('/customers')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Customer[]> {
    return await this.customerRepository.find(filter);
  }

  @patch('/customers')
  async updateAll(
    @requestBody() customers: Customer,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.customerRepository.updateAll(customers, where);
  }

  @get('/customers/{id}')
  async findById(@param.path.string('id') id: string): Promise<Customer> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() customers: Customer
  ): Promise<boolean> {
    return await this.customerRepository.updateById(id, customers);
  }

  @del('/customers/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<boolean> {
    return await this.customerRepository.deleteById(id);
  }
}
