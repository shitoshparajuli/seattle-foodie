/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4JkClsJG211
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MainComponent() {

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200"> The Seattle Foodie</h1>
        
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
      <main className="p-4 md:p-6 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
          <input
            className="w-full px-4 py-2 border border-gray-200 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:focus:ring-blue-600 dark:border-gray-800"
            placeholder="Search..."
            type="text"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">My Favorite Restaurants</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img
                  alt="The Pink Door"
                  className="w-24 h-24 object-cover rounded-lg"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    The Pink Door
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    Pike Place Market, Seattle
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lasagna Pink Door -<span className="font-semibold">4.5/5</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cioppino -<span className="font-semibold">4/5</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tiramisu -<span className="font-semibold">5/5</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Overall:
                <span className="font-semibold">4.5/5</span>
              </p>
              <Link className="btn btn-primary" href="#">
                View Details
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img
                  alt="Canlis"
                  className="w-24 h-24 object-cover rounded-lg"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">Canlis</CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    Queen Anne, Seattle
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Smoked Salmon -<span className="font-semibold">5/5</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Duck -<span className="font-semibold">4.5/5</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Crème Brûlée -<span className="font-semibold">4/5</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Overall:
                <span className="font-semibold">4.5/5</span>
              </p>
              <Link className="btn btn-primary" href="#">
                View Details
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img
                  alt="The Walrus and the Carpenter"
                  className="w-24 h-24 object-cover rounded-lg"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    The Walrus and the Carpenter
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    Ballard, Seattle
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Oysters -<span className="font-semibold">5/5</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Steak Tartare -<span className="font-semibold">4/5</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bread Pudding -<span className="font-semibold">4.5/5</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Overall:
                <span className="font-semibold">4.5/5</span>
              </p>
              <Link className="btn btn-primary" href="#">
                View Details
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/create" passHref>
            <Button className="btn btn-primary w-full" >Create New Entry</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
