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

export default function CreateComponent() {

  // State to manage dishes dynamically
  const [dishes, setDishes] = useState([{ name: '', rating: '' }]);

  // Function to add a new dish object to the dishes state
  const addDish = () => {
    setDishes([...dishes, { name: '', rating: '' }]);
  };

  // Function to handle change in dish input
  const handleDishChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newDishes = [...dishes];
    const key = event.target.name as keyof typeof newDishes[number];
    newDishes[index][key] = event.target.value;
    setDishes(newDishes);
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
              <form className="space-y-4">
                <Input className="w-full" placeholder="Restaurant Name" type="text" />
                <Input className="w-full" placeholder="Location" type="text" />

                <div className="space-y-4">
                  <label className="text-base" htmlFor="dishes">Dishes</label>
                  {dishes.map((dish, index) => (
                    <div key={index} className="grid gap-4">
                      <div className="grid gap-2">
                        <Input
                          className="w-full"
                          placeholder="Dish Name"
                          type="text"
                          name="name"
                          value={dish.name}
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
                      </div>
                    </div>
                  ))}
                  <Button className="btn btn-secondary w-full" type="button" onClick={addDish}>
                    Add Dish
                  </Button>
                </div>
                <Input className="w-full" placeholder="Overall Rating" type="text" />
                <div className="flex items-center space-x-4">
                  <Label className="text-base" htmlFor="visitAgain">
                    Would visit again?
                  </Label>
                  <div className="flex items-center space-x-2" id="visitAgain">
                    <input className="form-radio" id="yes" name="visitAgain" type="radio" value="yes" />
                    <label className="text-base" htmlFor="yes">
                      Yes
                    </label>
                    <input className="form-radio" id="no" name="visitAgain" type="radio" value="no" />
                    <label className="text-base" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
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
