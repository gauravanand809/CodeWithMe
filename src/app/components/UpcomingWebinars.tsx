"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

const UpcomingWebinars = () => {

    const courseWebinars = [
        {
          title: "Mastering MERN Stack Development",
          description: "Join us for an in-depth webinar on mastering the MERN stack (MongoDB, Express.js, React, and Node.js). Learn how to build full-stack applications with hands-on examples and best practices.",
          link: "https://example.com/mern-webinar"
        },
        {
          title: "Spring Boot Essentials",
          description: "Discover the essentials of Spring Boot in our comprehensive webinar. Learn how to create production-ready applications with ease using Spring Boot's powerful features and integrations.",
          link: "https://example.com/spring-boot-webinar"
        },
        {
          title: "Flutter for Mobile Development",
          description: "Explore the world of mobile development with Flutter. This webinar covers everything from setting up your development environment to building and deploying cross-platform apps with Flutter.",
          link: "https://example.com/flutter-webinar"
        },
        {
          title: "Advanced C++ Development",
          description: "Take your C++ skills to the next level with our advanced C++ development webinar. Learn about advanced topics, performance optimization, and best practices for writing efficient C++ code.",
          link: "https://example.com/cpp-webinar"
        },
        {
          title: "Building RESTful APIs with Node.js",
          description: "Join our webinar on building RESTful APIs with Node.js. Learn how to create scalable and maintainable APIs using Node.js and Express.js, with real-world examples and tips.",
          link: "https://example.com/nodejs-api-webinar"
        },
        {
          title: "React.js for Beginners",
          description: "Get started with React.js in our beginner-friendly webinar. Learn the fundamentals of React, component-based architecture, state management, and how to build dynamic user interfaces.",
          link: "https://example.com/reactjs-webinar"
        }
      ];
      
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={courseWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )

  
}

export default UpcomingWebinars
