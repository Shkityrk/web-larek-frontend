interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export interface ICard {
	id: string;
	title: string;
	description?: string | string[];
	image: string;
	category: string;
	price: number | null;
	disabled: boolean;
}
