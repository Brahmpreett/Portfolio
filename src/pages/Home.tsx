import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CardComponent from '@/components/ui/card-component';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text-primary">
              Brahmpreet Singh
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Orchestrating digital realms that entwine resplendent aesthetics with formidable efficacy.
          </p>
          
          {/* Animated gradient line */}
          <div className="flex justify-center mb-12">
            <div className="w-32 h-1 gradient-primary rounded-full animate-pulse-slow" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white hover:scale-105 transition-transform duration-200 focus-ring"
            >
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:bg-surface-elevated hover:scale-105 transition-all duration-200 focus-ring"
            >
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          <CardComponent hover={false} className="text-center">
            <div className="text-3xl font-bold gradient-text-secondary mb-2">10+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </CardComponent>
          <CardComponent hover={false} className="text-center">
            <div className="text-3xl font-bold gradient-text-secondary mb-2">3rd</div>
            <p className="text-muted-foreground">Year in BTech</p>
          </CardComponent>
          <CardComponent hover={false} className="text-center">
            <div className="text-3xl font-bold gradient-text-secondary mb-2">100+</div>
            <p className="text-muted-foreground">Hours Hands-On coding</p>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default Home;