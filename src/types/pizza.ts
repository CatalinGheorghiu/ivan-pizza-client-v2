export type IngredientType = {
  id: string;
  name: string;
};

export type PizzaType = {
  id: string;
  name: string;
  origin: string;
  image: string;
  description: string;
  canBeDeleted: boolean;
  ingredientsIds: string[];
  ingredients: IngredientType[];
};

export type InitialFormValuesType = {
  name: string;
  origin: string;
  image: string;
  ingredientsIds: string[];
  description: string;
};
