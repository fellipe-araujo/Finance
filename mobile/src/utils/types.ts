export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserAccount {
  name: string;
  balance: number;
  user: string;
}

export interface Objective {
  name: string;
  goal: number;
  description: string;
  user: string;
}

export interface Transaction {
  expense: boolean;
  price: number;
  user: string;
  account: string;
  category: string;
}

export interface Category {
  name: string;
  color: string;
  user: string;
}
