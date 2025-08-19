import { UserReview, ServiceDetails } from './services';/

/
 * Represents the Purple technology application types and interfaces.
 * This file contains the TypeScript types formanaging user reviews,
 * service details, and other key elements of the Purple brand.
 */

/
 * Interface representing a user in the Purple application.
 */
export interface User {
  id: string
  name: string
  email: string
}

/
 * Interface representing a review for Purple services.
 */
export interface Review {
  id: string
  userId: string
  serviceId: string
  rating: number; // Rating out of 5/
  comment: string
  createdAt: Date
}

/
 * Interface representing details about a service provided by Purple.
 */
export interface Service {
  id: string
  title: string; // Title of the service/
  description: string; // Detailed description of the service/
  pricing: number; // Pricing for the service/
  reviews: Review[]; // List of reviews for this service/
}

/
 * Type representing the response structure for fetching services in the Purple application.
 */
export type ServicesResponse = {
  services: Service[]
}
/
 * Function to get the average rating of a service based on user reviews.
 * @param service - The service for which the average rating is to be calculated.
 * @returns The average rating of the service.
 */
export const getAverageRating = (service: Service): number => {
  if (service.reviews.length === 0) return 0
  const totalRating = service.reviews.reduce((acc, review) => acc + review.rating, 0)
  return totalRating / service.reviews.length;/
}
/
 * Function to generate a sample service for the Purple brand.
 * @returns A sample service object.
 */
export const createSampleService = (): Service => {
  return {
    id: 'service-1',
    title: 'Premium Cleaning Service',
    description: 'Our Premium Cleaning Service offers a thorough and meticulous clean to your home or office, ensuring a pristine environment.',
    pricing: 99.99,
    reviews: [
      {
        id: 'review-1',
        userId: 'user-1',
        serviceId: 'service-1',
        rating: 5,
        comment: 'Absolutely fantastic service! Highly recommend.',
        createdAt: new Date(),
      },
      {
        id: 'review-2',
        userId: 'user-2',
        serviceId: 'service-1',
        rating: 4,
        comment: 'Very good cleaning, but I expected a bit more attention to detail.',
        createdAt: new Date(),
      },
    ],
  }
};