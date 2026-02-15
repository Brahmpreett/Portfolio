import { useState } from 'react';
import { Code, Database, Bot, Wrench } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import CardComponent from '@/components/ui/card-component';
import Tag from '@/components/ui/tag';

const skillCategories = [
  { id: 'all', label: 'All', icon: null },
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'ai', label: 'AI', icon: Bot },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

const skills = [
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend'},
  { name: 'JavaScript (ES6+)', category: 'frontend'},
  { name: 'Tailwind CSS', category: 'frontend'},
  { name: 'React JS', category: 'frontend' },
  
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'AWS', category: 'backend' },

  { name: 'Artificial Intelligence Fundamentals', category: 'ai' },
  { name: 'Machine Learning', category: 'ai' },
  { name: 'Data Processing & Model Development', category: 'ai' },
  { name: 'Cloud Computing (Google Cloud Platform)', category: 'ai' },
  { name: 'MLOps & Deployment', category: 'ai' },

  { name: 'npm', category: 'tools'},
  { name: 'Linux', category: 'tools' },
  { name: 'Git & Github', category: 'tools' },
  { name: 'VS Code', category: 'tools'},
  { name: 'Matlab', category: 'tools' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="py-16">
      <SectionHeader
        title="Skills & Expertise"
        subtitle="Technologies and the tools I work with."
      />

      {/* Filter Chips */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Tag
              key={category.id}
              variant="outline"
              size="md"
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-200"
            >
              {Icon && <Icon className="w-4 h-4 mr-2" />}
              {category.label}
            </Tag>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <CardComponent
            key={skill.name}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            
            <div className="flex flex-col items-center justify-centre h-full text-center space-y-2">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              {/* <span className="text-sm text-muted-foreground">
                {skill.proficiency}%
              </span> */}
            
            
            {/* Proficiency Bar
            <div className="space-y-2">
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div> */}
              
              {/* Category Tag */}
              <Tag variant="gradient" size="sm">
                {skillCategories.find(cat => cat.id === skill.category)?.label}
              </Tag>
            </div>
            
          </CardComponent>
        ))}
      </div>

      {/* Skeleton loaders for empty state */}
      {filteredSkills.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton h-32 rounded-2xl" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;