import SectionHeader from '@/components/ui/section-header';
import CardComponent from '@/components/ui/card-component';
import Tag from '@/components/ui/tag';
import profileImage from '@/assets/profile.jpg';

const interests = [
  'Web Development','Embedded systems', 'Machine Learning', 
  'App Development', 'Fitness', 'Chess', 'Gaming', 'Guitar'
];

const About = () => {
  return (
    <div className="py-16">
      <SectionHeader
        title="About Me"
        subtitle="Get to know the person behind the code"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="text-center lg:text-left">
          <div className="relative inline-block">
            <div className="absolute inset-0 gradient-primary rounded-full p-1 animate-pulse-slow">
              <div className="bg-background rounded-full p-2">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-64 h-64 object-cover rounded-full mx-auto"
                />
              </div>
            </div>
            <img
              src={profileImage}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full mx-auto relative z-10"
            />
          </div>
        </div>

        {/* Bio Content */}
        <div className="space-y-6">
          <CardComponent>
            <h3 className="text-2xl font-bold mb-4 gradient-text-primary">
              Hello there! 👋
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
              Full-stack enthusiast with more than 3 years of experience developing
              web applications users adore. My background is rooted in curiosity 
               and has grown into a dedication to delivering innovative solutions.

              </p>
              <p>
              I have expertise in cutting-edge web technologies such as React, 
              Node.js, and cloud platforms. Outside of code, I'm reading about 
              new design trends, working on open-source projects, or planning 
              my next escapade.

              </p>
              <p>
              I think that clean code, intentional design, and ongoing learning 
              have the power to change the world. Each project is a chance to 
              innovate and build something worthwhile.
              </p>
            </div>
          </CardComponent>

          {/* Interests */}
          <CardComponent>
            <h3 className="text-xl font-semibold mb-4">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Tag key={interest} variant="outline">
                  {interest}
                </Tag>
              ))}
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default About;