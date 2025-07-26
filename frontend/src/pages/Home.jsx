import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Download, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { personalInfo, services, portfolio, testimonials } from '../components/mock';

const Home = () => {
  const featuredProjects = portfolio.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-green-50 pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-green-600/5"></div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-red-600">Dictor Olame</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">{personalInfo.title}</p>
            <p className="text-3xl font-bold text-green-600 mb-6">{personalInfo.tagline}</p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/portfolio">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_e683fc19-7128-4bb8-ac56-9f0d25dda9e5/artifacts/9ed4npd9_Douglas_graphics%5B1%5D.png" 
                alt="Douglas Graphics Header"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {personalInfo.experience}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">{personalInfo.experience}</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">{personalInfo.projectsCompleted}</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">{personalInfo.clientsSatisfied}</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I offer comprehensive design and development services to help bring your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work in graphic design and web development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-red-100 text-red-800 hover:bg-red-200">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-red-50 to-green-50 border-2 border-red-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-green-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch and let's discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;