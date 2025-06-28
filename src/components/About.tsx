import React from 'react';
import { Download, Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      color: 'text-green-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe Creative Suite, Prototyping',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Agile methodologies, Git, Team leadership',
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                With over 5 years of experience in full-stack development, I specialize in creating 
                seamless digital experiences that bridge the gap between beautiful design and robust functionality. 
                My journey began with a computer science degree, but my passion for user-centric design has 
                shaped my approach to development.
              </p>
              
              <p className="mb-6">
                I believe that great software is built through collaboration, continuous learning, and 
                attention to detail. Whether working on a startup's MVP or scaling enterprise applications, 
                I bring the same level of dedication to crafting solutions that users love.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or sharing knowledge with the developer community through writing and mentoring.
              </p>
            </div>

            {/* Resume Download */}
            <div className="pt-6">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 ${skill.color}`}>
                    <IconComponent size={24} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '20+', label: 'Happy Clients' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;