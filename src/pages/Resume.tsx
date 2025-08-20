import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/section-header';
import CardComponent from '@/components/ui/card-component';
import Tag from '@/components/ui/tag';

const experiences = [
  {
    title: 'Frontend Developer (Portfolio Project)',
    company: 'Self',
    duration: '2025',
    description: 'Developed and deployed a personal portfolio website using modern frameworks with focus on responsive design, performance, and clean UI.',
    skills: ['React', 'Tailwind CSS', 'Vercel']
  },
  {
    title: 'Algorithm Visualizer Project',
    company: 'Self',
    duration: '2025',
    description: 'Created an interactive Sorting Visualizer to demonstrate algorithms like Bubble Sort, Merge Sort, and Quick Sort, enhancing understanding of DSA concepts through visual representation.',
    skills: ['JavaScript', 'Algorithm', 'Data Structures']
  },
  {
    title: 'Open Source & Community Contributions',
    company: 'Google',
    duration: '2023 - Present',
    description: 'Active participant in developer communities including Google Developer Program and Firebase Studio Community. Explored tools and contributed to collaborative projects.',
    skills: ['Git & Github', 'npm', 'Community Engagement']
  }
];

const education = [
  {
    degree: 'Bachelor of Electronics and Computer Science',
    institution: 'Thapar University of Engineering and Technology, Patiala',
    duration: '2023 - 2027',
    description: 'Focused on software engineering, algorithms, and data structures.',
    achievements: ['Arduino Projects', 'Signal Processing Experiments']
  },
  {
    degree: '10+2',
    institution: 'BCM Senior Secoondary School, Ludhiana',
    duration: '2022 - 2023',
    description: 'Non-Medical - Physics, Chemistry and Maths',
    achievements: ['83.6%']
  }
];

const achievements = [
  'Arduino Projects - obstacle detection buggy, wireless control',
  'Digital Signal Processing - 74x148 encoder',
  'Portfolio Website - React, Tailwind',
  'Google Developer Program - Firebase Community member'
];

const Resume = () => {
  const handleDownload = () => {
    // Mock download - in real implementation, this would download an actual PDF
    alert('PDF download would start here!');
  };

  return (
    <div className="py-16">
      <SectionHeader
        title="Resume & Experience"
        subtitle="My professional journey and accomplishments"
      >
        <Button
          onClick={handleDownload}
          className="gradient-primary text-white hover:scale-105 transition-transform duration-200 focus-ring"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </SectionHeader>

      <div className="space-y-16">
        {/* Quick Highlights */}
        <CardComponent gradient>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text-secondary mb-2">2+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-secondary mb-2">6+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-secondary mb-2">10+</div>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-secondary mb-2">100%</div>
              <p className="text-muted-foreground">Project Completion</p>
            </div>
          </div>
        </CardComponent>

        {/* Experience Timeline */}
        <div>
          <div className="flex items-center mb-8">
            <Briefcase className="w-6 h-6 mr-3 text-gradient-primary-start" />
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <CardComponent
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold gradient-text-primary">
                      {exp.title}
                    </h4>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                  <Tag variant="outline" size="md">
                    {exp.duration}
                  </Tag>
                </div>
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Tag key={skill} variant="gradient" size="sm">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </CardComponent>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center mb-8">
            <GraduationCap className="w-6 h-6 mr-3 text-gradient-secondary-start" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <CardComponent key={index}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold gradient-text-secondary">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  </div>
                  <Tag variant="outline" size="md">
                    {edu.duration}
                  </Tag>
                </div>
                <p className="text-muted-foreground mb-4">
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <Tag key={achievement} variant="gradient" size="sm">
                      {achievement}
                    </Tag>
                  ))}
                </div>
              </CardComponent>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 mr-3 text-gradient-accent-start" />
            <h3 className="text-2xl font-bold">Achievements & Recognition</h3>
          </div>
          
          <CardComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-surface rounded-lg"
                >
                  <Award className="w-5 h-5 mr-3 text-gradient-accent-start flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default Resume;