// src/types/types.ts

export interface Dish {
    dish_name: string;
    rating: string;
    comment: string;
  }
  
  export interface RestaurantData {
    restaurant_name: string;
    visit_date: string;
    dishes: Dish[];
    overall_rating: number;
    would_visit_again: boolean;
    additional_comments: string;
  }
  