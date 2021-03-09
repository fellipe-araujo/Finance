export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserAccount {
  _id?: string;
  name: string;
  balance?: number;
  user?: string;
}

export interface UserObjective {
  _id: string;
  name: string;
  goal: number;
  description: string;
  user: string;
}

export interface UserTransaction {
  _id: string;
  expense: boolean;
  price: number;
  user: string;
  account: string;
  category: string;
}

export interface UserCategory {
  _id?: string;
  name?: string;
  color?: string;
  user?: string;
}
