import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { blogPosts } from '../components/mock';

const Blog = () => {
  const categories = ['All', 'Web Design', 'Graphic Design', 'UI/UX Design', 'Development'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-red-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Insights, tips, and thoughts on design, development, and the creative process. 
            Stay updated with the latest trends and best practices in the industry.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Categories:</span>
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

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-red-50 to-green-50 border-2 border-red-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="mb-4 bg-green-100 text-green-800 w-fit">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-fit">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${
                        post.category === 'Web Design' ? 'bg-red-600' :
                        post.category === 'Graphic Design' ? 'bg-green-600' :
                        'bg-blue-600'
                      } text-white`}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-red-50 to-green-50 border-2 border-red-100">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to my newsletter and never miss an update on the latest design trends, 
                development tips, and creative insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start a Project
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

export default Blog;