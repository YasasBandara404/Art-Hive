import { Link } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <h1 className="text-7xl font-bold text-ct-blue-500 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild className="bg-ct-blue-500 hover:bg-ct-blue-600">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
