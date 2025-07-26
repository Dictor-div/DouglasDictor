import React, { useState } from 'react';
import { Eye, ExternalLink, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { portfolio } from '../components/mock';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Graphic Design', 'Web Development', 'UI/UX Design'];
  
  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolio 
    : portfolio.filter(project => project.category === selectedCategory);

  const additionalProjects = [
    {
      id: 7,
      title: "Adobe Photoshop Design Project",
      category: "Graphic Design",
      description: "Creative design work showcasing advanced Photoshop techniques and artistic vision.",
      image: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=500&h=300&fit=crop",
      technologies: ["Adobe Photoshop", "Creative Suite"]
    },
    {
      id: 8,
      title: "Visual Studio Code Extension",
      category: "Web Development",
      description: "Custom VS Code extension development for enhanced developer productivity.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "VS Code API", "Node.js"]
    },
    {
      id: 9,
      title: "Advanced Photoshop Artwork",
      category: "Graphic Design",
      description: "Digital artwork and photo manipulation showcasing advanced Photoshop skills.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      technologies: ["Adobe Photoshop", "Digital Art"]
    },
    {
      id: 10,
      title: "Development Environment Setup",
      category: "Web Development",
      description: "Optimized development workflow and environment configuration for efficient coding.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      technologies: ["VS Code", "Git", "Node.js"]
    }
  ];

  const allProjects = [...portfolio, ...additionalProjects];
  const finalFilteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-red-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A showcase of my creative work spanning graphic design, web development, and digital innovation. 
            Each project represents a unique challenge and a creative solution.
          </p>
          <Badge className="bg-green-600 text-white px-6 py-2 text-lg">
            {allProjects.length} Projects Completed
          </Badge>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finalFilteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      project.category === 'Graphic Design' ? 'bg-red-600' :
                      project.category === 'Web Development' ? 'bg-green-600' :
                      'bg-blue-600'
                    } text-white`}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">{allProjects.length}</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {allProjects.filter(p => p.category === 'Graphic Design').length}
              </div>
              <div className="text-gray-600">Design Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {allProjects.filter(p => p.category === 'Web Development').length}
              </div>
              <div className="text-gray-600">Web Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {allProjects.filter(p => p.category === 'UI/UX Design').length}
              </div>
              <div className="text-gray-600">UI/UX Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Tools</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The technologies and tools I use to bring projects to life
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Adobe XD",
              "VS Code", "React", "Node.js", "HTML/CSS", "JavaScript", "Python", "MongoDB"
            ].map((tech, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">{tech}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Like What You See?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to create something amazing together? Let's discuss your next project and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;