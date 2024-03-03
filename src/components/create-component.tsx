/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cKzzpxz2LS5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
import React from "react"
import Link from "next/link"
import { useState } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dish, RestaurantData } from '@/model/model'

export default function CreateComponent() {

  const [restaurantName, setRestaurantName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  // State to manage dishes dynamically
  const [dishes, setDishes] = useState([{ dish_name: '', rating: '', comment: '' }]);
  const [overallRating, setOverallRating] = useState('');
  const [wouldVisitAgain, setWouldVisitAgain] = useState<boolean>(false);
  const [additionalComments, setAdditionalComments] = useState('');

  // Function to add a new dish object to the dishes state
  const addDish = () => {
    setDishes([...dishes, { dish_name: '', rating: '', comment: '' }]);
  };

  // Function to handle change in dish input
  const handleDishChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newDishes = [...dishes];
    const key = event.target.name as keyof typeof newDishes[number];
    newDishes[index][key] = event.target.value;
    setDishes(newDishes);
  };

  const handleOverallRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Use parseInt to convert input value to a number, default to an empty string if NaN
    const ratingValue = parseInt(event.target.value, 10);
    if (!isNaN(ratingValue)) {
      setOverallRating(event.target.value); // Store the numeric value as a string
    } else {
      setOverallRating(''); // Reset to empty string if the parsed value is NaN
    }
  };
  

  const handleVisitAgainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWouldVisitAgain(event.target.value === 'yes');
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData: RestaurantData = { 
      restaurant_name: restaurantName,
      visit_date: visitDate,
      dishes,
      overall_rating: parseInt(overallRating, 5) || 0,
      would_visit_again: wouldVisitAgain, // Assuming 'yes' or 'no' value
      additional_comments: additionalComments
    };
  
    try {
      const response = await fetch('/api/createRestaurant', { // Make sure the path matches your API file structure
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Restaurant added successfully");
        // Reset form or handle success
      } else {
        console.error("Failed to add restaurant");
        // Handle error response
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Seattle Foodie</h1>
        <nav className="space-x-4">
          <Link className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
            Home
          </Link>
          <Link className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
            About
          </Link>
          <Link className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="p-4 md:p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">My Favorite Restaurants</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Add New Restaurant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  className="w-full"
                  placeholder="Restaurant Name" 
                  type="text" 
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                />

                <Input 
                  className="w-full" 
                  placeholder="Visit Date" 
                  type="text" 
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                />

                <div className="space-y-4">
                  <label className="text-base" htmlFor="dishes">Dishes</label>
                  {dishes.map((dish, index) => (
                    <div key={index} className="grid gap-4">
                      <div className="grid gap-2">
                        <Input
                          className="w-full"
                          placeholder="Dish Name"
                          type="text"
                          name="dish_name"
                          value={dish.dish_name}
                          onChange={(event) => handleDishChange(index, event)}
                        />
                        <Input
                          className="w-full"
                          placeholder="Rating"
                          type="text"
                          name="rating"
                          value={dish.rating}
                          onChange={(event) => handleDishChange(index, event)}
                        />
                        <Input
                          className="w-full"
                          placeholder="Comment"
                          type="text"
                          name="comment"
                          value={dish.comment}
                          onChange={(event) => handleDishChange(index, event)}
                        />
                      </div>
                    </div>
                  ))}
                  <Button className="btn btn-secondary w-full" type="button" onClick={addDish}>
                    Add Dish
                  </Button>
                </div>
                <Input className="w-full" placeholder="Overall Rating" type="text" value={overallRating} onChange={handleOverallRatingChange} />
                <div className="flex items-center space-x-4">
                  <Label className="text-base" htmlFor="visitAgain">
                    Would visit again?
                  </Label>
                  <div className="flex items-center space-x-2" id="visitAgain">
                    <input 
                      className="form-radio" 
                      id="yes" 
                      name="visitAgain" 
                      type="radio"
                      value="yes"
                      checked={wouldVisitAgain === true}
                      onChange={handleVisitAgainChange}
                    />
                    <label className="text-base" htmlFor="yes">
                      Yes
                    </label>
                    <input
                      className="form-radio"
                      id="no"
                      name="visitAgain"
                      type="radio"
                      value="no"
                      checked={wouldVisitAgain === false}
                      onChange={handleVisitAgainChange}
                    />
                    <label className="text-base" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
                <Input className="w-full" placeholder="Additional Comments" type="text" value={additionalComments} />
                <Button className="btn btn-primary w-full" type="submit">
                  Add Restaurant
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
