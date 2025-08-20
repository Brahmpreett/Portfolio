import { useState } from 'react';
import { Code, Database, Palette, Wrench } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import CardComponent from '@/components/ui/card-component';
import Tag from '@/components/ui/tag';

const skillCategories = [
  { id: 'all', label: 'All', icon: null },
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

const skills = [
  { name: 'HTML5', category: 'frontend', proficiency: 85 },
  { name: 'CSS3', category: 'frontend', proficiency: 80 },
  { name: 'JavaScript (ES6+)', category: 'frontend', proficiency: 75 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 80 },
  { name: 'React', category: 'frontend', proficiency: 85 },
  
  { name: 'Node.js', category: 'backend', proficiency: 75 },
  { name: 'Python', category: 'backend', proficiency: 70 },
  { name: 'SQL', category: 'backend', proficiency: 70 },

  { name: 'Canva', category: 'design', proficiency: 75 },
  { name: 'Adobe Firefly', category: 'design', proficiency: 65 },

  { name: 'npm', category: 'tools', proficiency: 80 },
  { name: 'Linux', category: 'tools', proficiency: 70 },
  { name: 'Git & Github', category: 'tools', proficiency: 75 },
  { name: 'VS Code', category: 'tools', proficiency: 85 },
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
        subtitle="Technologies and tools I work with"
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
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.proficiency}%
                </span>
              </div>
              
              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
              
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