import { juggler, AnyObject } from '@loopback/repository';
export declare class QuoteDSDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
