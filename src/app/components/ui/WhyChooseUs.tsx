"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
const WhyChooseUs = () => {
  const skillCourses = [
    {
      title: "MERN",
      description:
        "MERN is a full-stack development framework consisting of MongoDB, Express.js, React, and Node.js. It enables developers to build robust, scalable web applications. The stack's JavaScript-based ecosystem makes it popular for modern web development.",
    },
    {
      title: "SPRING BOOT",
      description:
        "Spring Boot is a framework that simplifies the development of Java applications. It offers pre-configured settings to create production-ready applications quickly. Spring Boot integrates with the Spring ecosystem, facilitating microservices architecture.",
    },
    {
      title: "FLUTTER",
      description:
        "Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase. Flutter's reactive framework allows for high-performance apps with a native feel.",
    },
    {
      title: "C++ DEV",
      description:
        "C++ Development focuses on using C++ for system/software development, game programming, and real-time simulations. C++ offers fine-grained control over system resources and memory, making it ideal for performance-critical applications. It is widely used in industries such as finance, gaming, and embedded systems.",
    },
  ];

  return <div className="p-1"><StickyScroll content={skillCourses}></StickyScroll></div>;
};

export default WhyChooseUs;
