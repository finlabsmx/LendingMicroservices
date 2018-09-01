import { juggler, AnyObject } from '@loopback/repository';
export declare class CustomerDSDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
