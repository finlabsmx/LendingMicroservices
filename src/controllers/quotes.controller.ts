import {Filter, Where, repository} from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import {Quote} from '../models';
import {QuoteRepository} from '../repositories';

export class QuotesController {
  constructor(
    @repository(QuoteRepository)
    public quoteRepository : QuoteRepository,
  ) {}

  @post('/quotes')
  async create(@requestBody() quotes: Quote)
    : Promise<Quote> {
    return await this.quoteRepository.create(quotes);
  }

  @get('/quotes/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.quoteRepository.count(where);
  }

  @get('/quotes')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Quote[]> {
    return await this.quoteRepository.find(filter);
  }

  @patch('/quotes')
  async updateAll(
    @requestBody() quotes: Quote,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.quoteRepository.updateAll(quotes, where);
  }

  @get('/quotes/{id}')
  async findById(@param.path.string('id') id: string): Promise<Quote> {
    return await this.quoteRepository.findById(id);
  }

  @patch('/quotes/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() quotes: Quote
  ): Promise<boolean> {
    return await this.quoteRepository.updateById(id, quotes);
  }

  @del('/quotes/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<boolean> {
    return await this.quoteRepository.deleteById(id);
  }
}
