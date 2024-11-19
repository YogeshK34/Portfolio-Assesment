"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import confetti from "canvas-confetti";
function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: y1,
        }}
      />
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto" // Added max-width and centered content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Crafting digital experiences with passion and precision
        </p>
        <Button size="lg" onClick={() => confetti()}>
          Explore My Work
        </Button>
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Scalable Web Application with Kubernetes",
      description:
        "This project showcases the deployment and management of a web application on Kubernetes. It involves creating Kubernetes clusters, defining pod deployments, and using services for load balancing, all aimed at ensuring scalabilit",
      image: "/kubernetes.png",
      tags: ["Helm", "Kubernetes", "Linux"],
    },
    {
      id: 2,
      title: "Containerized Web Application with Docker",
      description:
        "This project demonstrates the use of Docker to containerize a web application, allowing for consistent and portable deployments across different environments. It covers creating Docker images, setting up Docker Compose",
      image: "/docker1.jpg",
      tags: ["Docker", "Linux", "Go"],
    },
    {
      id: 3,
      title: "Predictive Analytics with Machine Learning",
      description:
        "This project uses machine learning algorithms to predict trends and outcomes based on historical data. It explores supervised learning models like regression and classification to offer data-driven insights and actionable predictions",
      image: "/ml.jpg",
      tags: ["Python", "Django", "NLP"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Django", "Ruby on Rails", "GraphQL"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Avatar className="w-48 h-48 mx-auto">
              <AvatarImage src="/bhavya.jpeg" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-4">
              As the Chief Technology Officer (CTO) of FaceSearchAI at Persist
              Ventures, I oversee the technological strategy and execution
              behind cutting-edge AI-driven facial recognition solutions. With a
              passion for innovation and a strong background in AI and machine
              learning.
            </p>
            <p className="text-lg mb-4">
              I lead a talented team focused on delivering impactful solutions
              that enhance user experience and security. My role involves
              aligning technology with business goals, fostering a culture of
              continuous learning, and driving the development of scalable and
              robust systems
            </p>
            <Tabs defaultValue="Frontend">
              <TabsList>
                {skills.map((skill) => (
                  <TabsTrigger key={skill.category} value={skill.category}>
                    {skill.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {skills.map((skill) => (
                <TabsContent key={skill.category} value={skill.category}>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>

        {/* Experience List */}
        <div className="space-y-8">
          {/* Experience 3 */}
          <motion.div
            className="p-6 rounded-md shadow-lg border-4 border-gray-200 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Chief Technology Officer
            </h3>
            <h4 className="text-xl mb-4">Persist Ventures · Full-time</h4>
            <p className="text-sm mb-4">Apr 2024 - Present · 8 mos</p>
            <p className="mb-4">
              Leading the technology strategy and overseeing product development
              for various projects at Persist Ventures.
            </p>
            <p>Technologies: Kubernetes, Docker, AWS</p>
          </motion.div>

          {/* Experience 4 */}
          <motion.div
            className="p-6 rounded-md shadow-lg border-4 border-gray-200 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">CTO @ FaceSearchAI</h3>
            <h4 className="text-xl mb-4">Persist Ventures · Full-time</h4>
            <p className="text-sm mb-4">Nov 2023 - Present · 1 yr 1 mo</p>
            <p className="mb-4">
              Managing the technological growth of FaceSearchAI, focusing on
              innovative AI solutions for facial recognition.
            </p>
            <p>Technologies: Python, TensorFlow, AWS</p>
          </motion.div>

          {/* Experience 5 */}
          <motion.div
            className="p-6 rounded-md shadow-lg border-4 border-gray-200 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Full Stack Engineer</h3>
            <h4 className="text-xl mb-4">Persist Ventures · Full-time</h4>
            <p className="text-sm mb-4">Oct 2023 - Present · 1 yr 2 mos</p>
            <p className="mb-4">
              Building full-stack applications using modern web technologies and
              frameworks.
            </p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </motion.div>

          {/* Experience 1 */}
          <motion.div
            className="p-6 rounded-md shadow-lg border-4 border-gray-200 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Software Engineer</h3>
            <h4 className="text-xl mb-4">
              Telaverge Communications · Internship
            </h4>
            <p className="text-sm mb-4">May 2022 - Apr 2023 · 1 yr</p>
            <p className="mb-4">
              Worked on software solutions for communications, with a focus on
              backend and frontend technologies.
            </p>
            <p>Technologies: Java, Node.js, SQL</p>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            className="p-6 rounded-md shadow-lg border-4 border-gray-200 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              AI Software Developer
            </h3>
            <h4 className="text-xl mb-4">HeyDaw Technologies · Internship</h4>
            <p className="text-sm mb-4">Aug 2023 - Oct 2023 · 3 mos</p>
            <p className="mb-4">
              Developed AI-driven applications using machine learning models and
              data analysis techniques.
            </p>
            <p>Technologies: Python, TensorFlow, Flask</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const posts = [
    {
      id: 1,
      title:
        "Mastering Kubernetes: A Beginner's Guide to Container Orchestration",
      date: "2023-05-15",
      img: "/k8s.png",
      excerpt:
        "This post will dive into Kubernetes, explaining its architecture and core components such as Pods, Deployments, and Services. Readers will learn how to set up and manage a Kubernetes cluster and deploy applications using Kubernetes' declarative configuration. The guide will emphasize scaling, networking, and monitoring ",
    },
    {
      id: 2,
      title:
        "Getting Started with Docker: Containerizing Your First Application",
      date: "2023-06-02",
      img: "/docker2.jpg",
      excerpt:
        "This blog post will guide beginners through the process of containerizing a simple application using Docker. It will cover the basics of Docker images, containers, Dockerfiles, and how to run applications in isolated environments. Aimed at newcomers, it will showcase the benefits of using Docker for application deployment and development.",
    },
    {
      id: 3,
      title:
        "Exploring Machine Learning in Production: Best Practices and Tools",
      date: "2023-06-20",
      img: "/ml2.jpg",
      excerpt:
        "This blog post will explore how to take machine learning models from development to production. It will cover the challenges of scaling ML models, deployment options, and the tools available for automating workflows, such as Docker for containerization, Kubernetes for orchestration, and specialized platforms like TensorFlow Serving.",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                </CardContent>
                <CardContent>
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Subscribing email:", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Subscribe to My Newsletter</CardTitle>
            <CardDescription>
              Get the latest updates on my projects and blog posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            {subscribed ? (
              <p className="text-center text-green-600">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" onClick={() => confetti()}>
                  Subscribe
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}
