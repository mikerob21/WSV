/**
 * Portfolio Image Mapping Utility
 * Maps company names to their corresponding WebP logo files
 */

// Map of company names to their actual file names in /public/images/portfolio/
const COMPANY_IMAGE_MAP: Record<string, string> = {
  'Footy Access': 'footyaccess.webp',
  'Atlantic City FC': 'Atlantic City FC.webp',
  'Innovosens': 'Innovosens.webp',
  'Odunde Sports': 'OdundeSports.webp',
  'The Town FC': 'TheTownFC.webp',
  'Drip FC': 'TheDripFC.webp',
  'Replica AI': 'Replica AI.webp',
  'FieldOfVision': 'FieldOfVision.webp',
  'Partum Inicio': 'Partum Inicio.webp',
  'Soccer Box Training': 'Soccer Box training.webp',
  'Soccer As Art': 'Soccer As Art.webp',
  'Apex Mental': 'Apex Mental.webp',
};

/**
 * Get the image path for a company logo
 * @param companyName - The name of the company
 * @returns The full path to the company's logo image or null if not found
 */
export function getCompanyLogoPath(companyName: string): string | null {
  const fileName = COMPANY_IMAGE_MAP[companyName];
  
  if (!fileName) {
    console.warn(`No logo file found for company: ${companyName}`);
    return null;
  }
  
  return `/images/portfolio/${fileName}`;
}

/**
 * Get all available company logos
 * @returns Array of company names that have logo files
 */
export function getAvailableCompanyLogos(): string[] {
  return Object.keys(COMPANY_IMAGE_MAP);
}

/**
 * Check if a company has a logo file available
 * @param companyName - The name of the company
 * @returns Boolean indicating if logo is available
 */
export function hasCompanyLogo(companyName: string): boolean {
  return companyName in COMPANY_IMAGE_MAP;
}

/**
 * Get the filename for a company (useful for debugging)
 * @param companyName - The name of the company
 * @returns The filename or null if not found
 */
export function getCompanyLogoFilename(companyName: string): string | null {
  return COMPANY_IMAGE_MAP[companyName] || null;
}