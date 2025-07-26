import React from 'react';
import { Download, Award, Users, Coffee, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { personalInfo, skills } from '../components/mock';

const About = () => {
  const achievements = [
    { icon: Award, title: "5+ Years Experience", description: "Professional design and development" },
    { icon: Users, title: "80+ Happy Clients", description: "Successful projects delivered" },
    { icon: Coffee, title: "1000+ Cups of Coffee", description: "Fueling creativity and productivity" },
    { icon: Heart, title: "Passion-Driven", description: "Love what I do, every single day" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-red-600">Dictor Olame</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {personalInfo.title}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                With over 5 years of experience in the creative industry, I specialize in transforming ideas into compelling visual stories. My passion lies in creating designs that not only look beautiful but also serve a purpose and connect with audiences on a deeper level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_e683fc19-7128-4bb8-ac56-9f0d25dda9e5/artifacts/lcv6l806_Douglas.jpg" 
                  alt="Douglas Dictor Olame"
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
                  <Badge className="bg-green-600 text-white px-4 py-2">
                    Available for Projects
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities and creative expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that define my journey in the creative industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Story</h2>
              <p className="text-xl text-gray-600">
                The journey that shaped who I am today
              </p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                My journey into the world of design began during my university years when I discovered the power of visual communication. What started as a curiosity about how colors, shapes, and typography could convey emotions and messages evolved into a deep passion for creating meaningful designs.
              </p>
              <p className="mb-6">
                Over the years, I've had the privilege of working with diverse clients across various industries, from startups looking to establish their brand identity to established companies seeking to refresh their visual presence. Each project has been a learning experience, teaching me the importance of understanding client needs, market trends, and user behavior.
              </p>
              <p className="mb-6">
                Today, I continue to push the boundaries of creativity while staying grounded in solid design principles. My goal is not just to create beautiful designs, but to solve problems, tell stories, and make a positive impact through visual communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;