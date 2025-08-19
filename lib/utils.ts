import { cn } from './classNames'; // Assuming cn-function is in a separate utility file/

/
 * Utility functions for the Purple application.
 * This module contains various helper functions and formatters
 * tailored for the Purple technology brand.
 * 
 * @module utils
 */

/
 * Interface for a review in the Purple application.
 * This represents a customer review for our technology services.
 */
export interface Review {
    id: number
    customerName: string
    feedback: string
    rating: number; // Rating out of 5/
}

/
 * Formats a rating to a user-friendly string.
 * 
 * @param rating - The numeric rating to format.
 * @returns A string representation of the rating.
 * 
 * @example
 * // returns "4.5/5"/
 * formatRating(4.5)
 */
export function formatRating(rating: number): string {
    return ${rating.toFixed(1)}/5;/
}

/
 * Formats a review into a presentable string.
 * 
 * @param review - The review object to format.
 * @returns A formatted string of the review.
 * 
 * @example
 * const review = { id: 1, customerName: "John Doe", feedback: "Excellent service!", rating: 5 }
 * formatReview(review)
 * // returns "John Doe: Excellent service! Rating: 5.0/5"/
 */
export function formatReview(review: Review): string {
    return ${review.customerName}: ${review.feedback} Rating: ${formatRating(review.rating)}
}

/
 * Generates a dynamic class name based on the provided conditions.
 * 
 * @param baseClass - The base class name.
 * @param conditions - An array of conditions that determine additional classes.
 * @returns A string of classes to apply to an element.
 */
export function dynamicClassName(baseClass: string, ...conditions: boolean[]): string {
    return cn(baseClass, ...conditions)
}

// Sample usage of Review interface and formatters/
const reviews: Review[] = [
    { id: 1, customerName: "Alice Smith", feedback: "The service was fantastic!", rating: 5 },
    { id: 2, customerName: "Bob Johnson", feedback: "Very professional and efficient.", rating: 4.5 },
]
// Display formatted reviews/
reviews.forEach(review => {
    console.log(formatReview(review))
});