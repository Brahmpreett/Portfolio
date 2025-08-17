import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-24 py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            <Link
              to="/support"
              className="animated-underline hover:text-foreground transition-colors duration-200 focus-ring"
            >
              Support
            </Link>
            {' '}the developer 💗
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;