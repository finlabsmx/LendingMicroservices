import { Entity } from '@loopback/repository';
export declare class Quote extends Entity {
    id: string;
    createdAt?: string;
    amount: number;
    interestRate: number;
    amountData1?: number;
    amountData2?: number;
    amountData3?: number;
    prospectFirstName: string;
    prospectLastName?: string;
    prospectEmail: string;
    prospectMobilePhone: string;
    incomeAmount: number;
    incomeAmount1?: number;
    incomeAmount2?: number;
    expensesAmount: number;
    expensesAmount1?: number;
    expensesAmount2?: number;
    extraInfo1?: string;
    extraInfo2?: string;
    extraInfo3?: string;
    extraInfo4?: string;
    extraInfo5?: string;
    extraInfo6?: string;
    extraInfo7?: string;
    extraInfo8?: string;
    extraInfo9?: string;
    extraInfo10?: string;
    constructor(data?: Partial<Quote>);
}
