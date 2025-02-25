import { IOrderResult, IOrder, IProductList, IProduct } from '../types';
import { Api } from './base/api';

export interface ILarekAPI {
	getProductList(): Promise<IProductList>;
	getProduct(id: string): Promise<IProduct>;
	makeOrder(order: IOrder): Promise<IOrderResult>;
}
