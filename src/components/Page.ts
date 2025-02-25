import { IProduct } from '../types';
import { IBasketView } from './Basket';

export interface IPage {
	counter: number;
	basket: IBasketView;
	products: IProduct[];
	locked: boolean;
}