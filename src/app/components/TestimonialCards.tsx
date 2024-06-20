'use clients'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
const TestimonialCards = () => {
    
    const userTestimonials = [
        {
          quote: "The MERN course was fantastic! The instructors were knowledgeable and the hands-on projects helped solidify my understanding of full-stack development.",
          name: "Aarav Mehta",
          title: "Full-Stack Developer"
        },
        {
          quote: "Spring Boot made Java development so much easier. The course materials were comprehensive and the examples were very practical.",
          name: "Ananya Sharma",
          title: "Backend Developer"
        },
        {
          quote: "Flutter was a game-changer for me. Building cross-platform apps has never been so straightforward. The course was detailed and easy to follow.",
          name: "Vivaan Singh",
          title: "Mobile App Developer"
        },
        {
          quote: "I loved the C++ Dev course! It provided me with the skills needed to develop high-performance applications. The challenges were tough but rewarding.",
          name: "Diya Gupta",
          title: "Software Engineer"
        },
        {
          quote: "The MERN course not only taught me the technical skills but also how to approach real-world projects. Highly recommend it to anyone looking to become a full-stack developer.",
          name: "Arjun Patel",
          title: "Web Developer"
        },
        {
          quote: "Spring Boot course was very well structured. It covered everything from basics to advanced topics, making it suitable for developers at all levels.",
          name: "Ishita Raj",
          title: "Java Developer"
        },
        {
          quote: "Taking the Flutter course was one of the best decisions. It allowed me to build and deploy apps for both iOS and Android with a single codebase.",
          name: "Kavya Rao",
          title: "App Developer"
        },
        {
          quote: "The C++ Dev course was intense but extremely beneficial. I now feel confident in my ability to write efficient and effective C++ code.",
          name: "Devansh Nair",
          title: "System Programmer"
        },
        {
          quote: "MERN Stack course helped me land my first job as a developer. The projects were very relevant to industry needs.",
          name: "Sneha Desai",
          title: "Junior Developer"
        },
        {
          quote: "The Spring Boot course was exactly what I needed to improve my backend development skills. The instructors were great and very supportive.",
          name: "Rohan Jain",
          title: "Backend Engineer"
        },
        {
          quote: "The MERN course was detailed and covered all aspects of full-stack development. It gave me the confidence to work on real-world projects.",
          name: "Mira Kaur",
          title: "Full-Stack Developer"
        },
        {
          quote: "The Spring Boot course provided excellent insights into Java development. The practical examples made learning easy and fun.",
          name: "Krishna Iyer",
          title: "Backend Developer"
        },
        {
          quote: "Learning Flutter has been a wonderful experience. The course was well-structured and the projects were very engaging.",
          name: "Aanya Chatterjee",
          title: "Mobile App Developer"
        },
        {
          quote: "The C++ Dev course was challenging but rewarding. I gained a deep understanding of C++ and its applications in system programming.",
          name: "Siddharth Kapoor",
          title: "Software Engineer"
        },
        {
          quote: "The MERN course was instrumental in shaping my career as a developer. The instructors were very helpful and the content was top-notch.",
          name: "Neha Malhotra",
          title: "Web Developer"
        },
        {
          quote: "Spring Boot course was a great investment. It enhanced my Java skills and prepared me for advanced backend development roles.",
          name: "Yash Verma",
          title: "Java Developer"
        },
        {
          quote: "Flutter course was fantastic! The course material was very clear and the instructors were always ready to help.",
          name: "Tanya Aggarwal",
          title: "App Developer"
        },
        {
          quote: "I highly recommend the C++ Dev course. It covered everything from basic to advanced concepts and helped me become proficient in C++.",
          name: "Aman Joshi",
          title: "System Programmer"
        },
        {
          quote: "The MERN course provided a comprehensive understanding of full-stack development. The projects were relevant and helped me build a strong portfolio.",
          name: "Priya Reddy",
          title: "Junior Developer"
        },
        {
          quote: "Spring Boot course was very insightful. It gave me a solid foundation in Java backend development and prepared me for real-world challenges.",
          name: "Rahul Pillai",
          title: "Backend Engineer"
        }
      ];
      
  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-9xl">
            <InfiniteMovingCards
                items={userTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>

  )
}

export default TestimonialCards
