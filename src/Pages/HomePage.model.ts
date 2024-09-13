export interface CardsModel {
  id: number;
  type: string;
  title: string;
  image: string;
}

export interface CardModel {
  cardData: CardsModel;
}
