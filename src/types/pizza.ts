export type Ingredient = {
  id: string;
  name: string;
  pizzasIds: string[];
};

export type PizzaType = {
  id: string;
  name: string;
  origin: string;
  image: string;
  description: string;
  canBeDeleted: boolean;
  ingredientsIds: string[];
  ingredients: Ingredient[];
};
