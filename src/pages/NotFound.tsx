import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CardComponent from '@/components/ui/card-component';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <CardComponent className="text-center max-w-md mx-auto" gradient>
        <div className="mb-8">
          <div className="text-8xl font-bold gradient-text-primary mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
          <p className="text-muted-foreground">
            Oops! The page you're looking for doesn't exist. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="gradient-primary text-white hover:scale-105 transition-transform duration-200 focus-ring"
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back Home
            </Link>
          </Button>
          <Button
            variant="outline"
            className="hover:bg-surface-elevated hover:scale-105 transition-all duration-200 focus-ring"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Animated gradient line */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 gradient-secondary rounded-full animate-pulse-slow" />
        </div>
      </CardComponent>
    </div>
  );
};

export default NotFound;