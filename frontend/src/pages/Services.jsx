import React from 'react';
import { Check, ArrowRight, Palette, Code, Smartphone, Printer, Globe, Megaphone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { services } from '../components/mock';

const Services = () => {
  const detailedServices = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating visually stunning designs that capture attention and communicate your message effectively.",
      features: [
        "Logo Design & Brand Identity",
        "Business Card & Stationery Design",
        "Brochure & Flyer Design",
        "Social Media Graphics",
        "Packaging Design",
        "Banner & Poster Design"
      ],
      pricing: "Starting from $50",
      color: "red"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, fast, and user-friendly websites that drive results and engage your audience.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Content Management Systems",
        "Website Maintenance",
        "SEO Optimization",
        "Performance Optimization"
      ],
      pricing: "Starting from $200",
      color: "green"
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences that delight users and improve conversion rates.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Mobile App Design",
        "Dashboard Design",
        "Usability Testing",
        "Design System Creation"
      ],
      pricing: "Starting from $150",
      color: "blue"
    },
    {
      icon: Printer,
      title: "Print Design",
      description: "Creating high-quality print materials that make a lasting impression on your audience.",
      features: [
        "Magazine & Book Layout",
        "Corporate Reports",
        "Event Materials",
        "Packaging Design",
        "Merchandise Design",
        "Print Advertising"
      ],
      pricing: "Starting from $75",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to grow your online presence and reach your target audience.",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Email Marketing Design",
        "Digital Advertising",
        "Analytics & Reporting",
        "Online Brand Management"
      ],
      pricing: "Starting from $100",
      color: "orange"
    },
    {
      icon: Megaphone,
      title: "Brand Strategy",
      description: "Developing comprehensive brand strategies that position your business for success in the market.",
      features: [
        "Brand Research & Analysis",
        "Brand Positioning",
        "Brand Guidelines",
        "Brand Voice Development",
        "Market Research",
        "Competitive Analysis"
      ],
      pricing: "Starting from $300",
      color: "pink"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
    };
    return colors[color] || colors.red;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-red-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I offer comprehensive design and development services to help bring your vision to life. 
            From concept to completion, I'm here to make your project a success.
          </p>
          <Badge className="bg-green-600 text-white px-6 py-2 text-lg">
            Professional • Reliable • Creative
          </Badge>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200 h-full">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(service.color)} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-2xl font-bold text-red-600 mb-4">{service.pricing}</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs, goals, and vision for the project."
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating a detailed project plan and timeline for execution."
              },
              {
                step: "03",
                title: "Design",
                description: "Bringing your vision to life with creative and functional designs."
              },
              {
                step: "04",
                title: "Delivery",
                description: "Final review, revisions, and delivering your completed project."
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Me?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what sets me apart from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "5+ Years Experience",
                description: "Proven track record of delivering successful projects across various industries."
              },
              {
                title: "Client-Focused Approach",
                description: "Your satisfaction is my priority. I work closely with you throughout the entire process."
              },
              {
                title: "Quick Turnaround",
                description: "Efficient workflow and project management ensures timely delivery without compromising quality."
              },
              {
                title: "Competitive Pricing",
                description: "High-quality services at affordable rates. Great value for your investment."
              },
              {
                title: "Unlimited Revisions",
                description: "I'll work with you until you're completely satisfied with the final result."
              },
              {
                title: "Ongoing Support",
                description: "Post-project support and maintenance to ensure your success continues."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;