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

export interface userResponse{
  access_token: string;
  message: string;
  name: string;
  typeToken:string;
  user: userGeneral[];


}

export interface userGeneral{

  created_at:string
  email:string
  email_verified_at:string | null;
  id:number;
  lastname:string;
  name:string;
  phone:number;
  rol:string;
  role_id:number;
  sex_id:number;
  updated_at:string;
}
