export const BRAND_NAME = "Purple"
export const PRIMARY_COLOR = "#800080"; // Purple/
export const SECONDARY_COLOR = "#FFFFFF"; // White/

/
 * Application configuration for Purple technology business.
 * This includes constants related to the brand and its visual identity.
 * 
 * @module constants
 */

/
 * Interface representing the configuration settings for Purple application.
 */
export interface Config {
    brandName: string
    primaryColor: string
    secondaryColor: string
    websiteDescription: string
    contactEmail: string
    socialMediaLinks: SocialMediaLinks
}

/
 * Interface representing the social media links for the Purple brand.
 */
export interface SocialMediaLinks {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
}

/
 * Configuration object for the Purple application.
 * This will be used throughout the application to maintain consistency
 * in branding and messaging.
 */
export const APP_CONFIG: Config = {
    brandName: BRAND_NAME,
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    websiteDescription: "Purple is a cutting-edge technology company focused on delivering minimalistic and innovative solutions. We prioritize clean design and user experience while leveraging the latest in technology to serve our customers.",
    contactEmail: "support@purple.com",
    socialMediaLinks: {
        facebook: "https://facebook.com/purple",/
        twitter: "https://twitter.com/purple",/
        linkedin: "https://linkedin.com/company/purple",/
        instagram: "https://instagram.com/purple"/
    }
};