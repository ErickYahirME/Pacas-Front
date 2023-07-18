export interface user{
  id: number;
  name: string;
  lastname: string;
  sex_id: number;
  role_id: number;
  phone: number;
  email: string;
  password: string;
}

export interface login{
  email: string;
  password: string;
}

export interface cartUser{
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
}
