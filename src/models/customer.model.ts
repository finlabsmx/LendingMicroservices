import {Entity, model, property} from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName1: string;

  @property({
    type: 'string',
  })
  firstName2?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName1: string;

  @property({
    type: 'string',
  })
  lastName2?: string;

  @property({
    type: 'string',
  })
  fiscalID?: string;

  @property({
    type: 'string',
  })
  nationalID?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  mobilePhone?: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
