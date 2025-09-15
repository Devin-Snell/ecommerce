import { db } from './index';
import { products } from './schema';

const nikeProducts = [
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    price: '119.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-90-mens-shoes-6n7J06.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 50,
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.',
    price: '109.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 75,
  },
  {
    name: 'Nike Dri-FIT T-Shirt',
    description: 'Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.',
    price: '29.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/dri-fit-mens-fitness-t-shirt-HPFDrq.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 100,
  },
  {
    name: 'Nike React Infinity Run',
    description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run.',
    price: '159.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8439f823-86cf-4086-81d2-4f9ff9a66866/react-infinity-run-flyknit-3-mens-road-running-shoes-QBvZvM.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 30,
  },
  {
    name: 'Nike Tech Fleece Hoodie',
    description: 'The Nike Sportswear Tech Fleece Windrunner Hoodie reimagines our iconic Windrunner jacket in premium fleece.',
    price: '89.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be49b/sportswear-tech-fleece-windrunner-mens-full-zip-hoodie-Z9mSzD.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 40,
  },
  {
    name: 'Nike Blazer Mid',
    description: 'Praised by the streets and styled for the courts, the Nike Blazer Mid brings classic basketball style to your everyday look.',
    price: '99.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 25,
  },
];

export async function seedProducts() {
  try {
    console.log('Seeding products...');
    await db.insert(products).values(nikeProducts);
    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

// Run seed if this file is executed directly
if (require.main === module) {
  seedProducts().then(() => process.exit(0)).catch(() => process.exit(1));
}