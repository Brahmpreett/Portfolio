import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/section-header';
import CardComponent from '@/components/ui/card-component';
import Tag from '@/components/ui/tag';
import visualizerImage from '@/assets/project-sorting-visualizer.jpg';
import potliImage from '@/assets/potli.png';
import weatherImage from '@/assets/project-weather.jpg';

const projects = [
  {
    id: 1,
    title: 'Algorithm Sorting Visualiser',
    description: 'An interactive web tool that visually demonstrates popular sorting algorithms through animated array operations.',
    image: visualizerImage,
    technologies: ['CSS', 'JavaScript', 'HTML'],
    liveUrl: 'https://brahmpreett.github.io/Sorting_Visualizer/',
  codeUrl: 'https://github.com/brahmpreett/Sorting_Visualizer',
  },
  {
    id: 2,
    title: 'Potli - Finance Management App',
    description: 'A visual budget management web app inspired by traditional Indian potli saving, where income auto-splits into categories with real-time balance tracking and customization.',
    image: potliImage,
    technologies: ['React', 'TypeScript', 'CSS', 'PLpgSQL'],
    liveUrl: 'https://potlis.vercel.app/',
    codeUrl: 'https://github.com/Brahmpreett/potli',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts and interactive maps.',
    image: weatherImage,
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    liveUrl: '#',
    codeUrl: '#',
  },
];

const Projects = () => {
  return (
    <div className="py-16">
      <SectionHeader
        title="Featured Projects"
        subtitle="A showcase of my recent work and creative solutions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <CardComponent
            key={project.id}
            className="group overflow-hidden animate-scale-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Button
                  size="sm"
                  className="bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30"
                  asChild
                >
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text-primary">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech} variant="outline" size="sm">
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </CardComponent>
        ))}
      </div>

      {/* Skeleton loaders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="space-y-4">
            <div className="skeleton h-48 rounded-lg" />
            <div className="skeleton h-6 w-3/4" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-2/3" />
            <div className="flex gap-2">
              <div className="skeleton h-6 w-16 rounded-full" />
              <div className="skeleton h-6 w-20 rounded-full" />
              <div className="skeleton h-6 w-14 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;