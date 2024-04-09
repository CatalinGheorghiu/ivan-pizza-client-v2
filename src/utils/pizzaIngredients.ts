import { IngredientType } from "@/types/pizza.ts";

export type IngredientOptions = {
  label: string;
  value: string;
};
export function ingredientsOptions(ingredients: IngredientType[]) {
  return ingredients.map(
    (ingredient): IngredientOptions => ({
      label: ingredient.name,
      value: ingredient.id
    })
  );
}
