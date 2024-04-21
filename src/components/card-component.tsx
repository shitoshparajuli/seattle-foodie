// components/RestaurantCard.js
import React from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"


function RestaurantCard({ name, location, imageUrl, dishes, overallRating }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <img
            alt={name}
            className="w-24 h-24 object-cover rounded-lg"
            height="100"
            src={imageUrl || '/placeholder.svg'}
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
            width="100"
          />
          <div>
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{location}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {dishes.map(dish => (
            <p key={dish.name} className="text-sm text-gray-600 dark:text-gray-400">
              {dish.name} - <span className="font-semibold">{dish.rating}/5</span>
            </p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Overall:{" "} 
          <span className="font-semibold">{overallRating}/5</span>
        </p>
        <Link className="btn btn-primary" href="#">
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}

export default RestaurantCard;
