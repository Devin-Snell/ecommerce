import { db } from '@/lib/db';
import { products, Product } from '@/lib/db/schema';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  let productList: Product[] = [];
  let error: string | null = null;

  try {
    // Check if database is properly configured
    if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('postgresql://') && !process.env.DATABASE_URL.includes('username:password')) {
      productList = await db.select().from(products);
    } else {
      error = 'Database not configured. Please set up your DATABASE_URL environment variable.';
    }
  } catch (err) {
    error = 'Failed to load products. Please make sure the database is configured.';
    console.error('Database error:', err);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Nike Store</h1>
          <p className="text-gray-600 mt-2">Discover the latest Nike products</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Database Connection Error</h2>
            <p className="text-red-600">{error}</p>
            <p className="text-sm text-red-500 mt-2">
              Please configure your DATABASE_URL environment variable and run the database migrations.
            </p>
          </div>
        ) : productList.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">No Products Found</h2>
            <p className="text-yellow-600">
              The database is connected but no products are available. Run the seed script to add sample products.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Showing {productList.length} products</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            Built with Next.js, TypeScript, Tailwind CSS, Drizzle ORM, and Neon PostgreSQL
          </p>
        </div>
      </footer>
    </div>
  );
}
