
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
  message: string;
  name: string;
  token: token;
  user: userGeneral;
}

export interface token{
  exception: boolean | null;
  headers : {};
  original: original;

}

export interface original {
  access_token:string,
  expires_in:number,
  token_type:string,
}

export interface userGeneral{

  created_at:string
  email:string
  email_verified_at:string | null;
  id:number;
  lastname:string;
  name:string;
  phone:number;
  rol?:string;
  role_id:number;
  sex_id:number;
  updated_at:string;
}

export interface sex{
  id: number;
  sex: string;
  created_at: string;
  updated_at: string;
}