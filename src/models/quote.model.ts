import {Entity, model, property} from '@loopback/repository';

@model()
export class Quote extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  createdAt?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  amount: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  interestRate: number;

  @property({
    type: 'number',
    default: 0,
  })
  amountData1?: number;

  @property({
    type: 'number',
    default: 0,
  })
  amountData2?: number;

  @property({
    type: 'number',
    default: 0,
  })
  amountData3?: number;

  @property({
    type: 'string',
    required: true,
  })
  prospectFirstName: string;

  @property({
    type: 'string',
  })
  prospectLastName?: string;

  @property({
    type: 'string',
    required: true,
  })
  prospectEmail: string;

  @property({
    type: 'string',
    required: true,
  })
  prospectMobilePhone: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  incomeAmount: number;

  @property({
    type: 'number',
    default: 0,
  })
  incomeAmount1?: number;

  @property({
    type: 'number',
    default: 0,
  })
  incomeAmount2?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  expensesAmount: number;

  @property({
    type: 'number',
    default: 0,
  })
  expensesAmount1?: number;

  @property({
    type: 'number',
    default: 0,
  })
  expensesAmount2?: number;

  @property({
    type: 'string',
  })
  extraInfo1?: string;

  @property({
    type: 'string',
  })
  extraInfo2?: string;

  @property({
    type: 'string',
  })
  extraInfo3?: string;

  @property({
    type: 'string',
  })
  extraInfo4?: string;

  @property({
    type: 'string',
  })
  extraInfo5?: string;

  @property({
    type: 'string',
  })
  extraInfo6?: string;

  @property({
    type: 'string',
  })
  extraInfo7?: string;

  @property({
    type: 'string',
  })
  extraInfo8?: string;

  @property({
    type: 'string',
  })
  extraInfo9?: string;

  @property({
    type: 'string',
  })
  extraInfo10?: string;

  constructor(data?: Partial<Quote>) {
    super(data);
  }
}
