type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  hash_password: string;
  pseudo: string;
};

type RecipeType = {
  id: number;
  title: string;
  description: string;
  picture: string;
  calories: number;
  user_id: number;
};
