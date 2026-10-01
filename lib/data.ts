import type { StaticImageData } from "next/image";
import card1 from "../assets/Cards/1.jpg";
import card2 from "../assets/Cards/2.jpg";
import card3 from "../assets/Cards/3.jpg";
import card4 from "../assets/Cards/4.jpg";
import card5 from "../assets/Cards/5.jpg";
import card6 from "../assets/Cards/6.jpg";

import path1 from "../assets/Paths/1.png";
import path2 from "../assets/Paths/2.png";
import path3 from "../assets/Paths/3.png";
import path4 from "../assets/Paths/4.png";
import path5 from "../assets/Paths/5.png";
import path6 from "../assets/Paths/6.png";

import testifier1 from "../assets/Testifiers/1.png";
import testifier2 from "../assets/Testifiers/2.png";
import testifier3 from "../assets/Testifiers/3.png";

import springLeft from "../assets/ShapesBottom/spring-left.png";
import springWhite from "../assets/ShapesBottom/spring-white.png";
import coneLeft from "../assets/ShapesBottom/Cone-left.png";
import coneLime from "../assets/ShapesBottom/Cone-lime.png";
import coneRight from "../assets/ShapesBottom/Cone-right.png";
import torusLime from "../assets/ShapesBottom/torus-lime.png";
import springRight from "../assets/ShapesBottom/spring-right.png";

export type Path = {
  title: string;
  image: StaticImageData;
};

export type Course = {
  id: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  image: StaticImageData;
};

export type Testimonial = {
  name: string;
  role: string;
  image: StaticImageData;
  text: string;
};

export const courses: Course[] = [
  { id: "figma-basics", title: "Learn Figma from Basic", author: "purepearl studio", rating: 4.5, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, image: card1 },
  { id: "digital-asset", title: "Build Digital Asset", author: "purepearl studio", rating: 4.5, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, image: card2 },
  { id: "big-data", title: "the Power of Big Data", author: "purepearl studio", rating: 4.5, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, image: card3 },
  { id: "productivity", title: "Balancing Productivity and Life", author: "purepearl studio", rating: 4.5, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, image: card4 },
  { id: "money", title: "Mastering Money Management", author: "purepearl studio", rating: 4.5, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, image: card5 },
  { id: "startup", title: "From Idea to Startup Success", author: "purepearl studio", rating: 4.5, price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, image: card6 },
];

export const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking"];

export const paths: Path[] = [
  { title: "Design", image: path1 },
  { title: "Development", image: path2 },
  { title: "IT & Software", image: path3 },
  { title: "Business", image: path4 },
  { title: "Marketing", image: path5 },
  { title: "Photography", image: path6 }
];

export const testimonials : Testimonial[] = [
  { name: "Sarah M.", role: "Enthusiastic Learner", image: testifier1, text: "ByteSpace has transformed my approach to learning. The diverse range of courses provided by creators has exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", image: testifier2, text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", image: testifier3, text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's so fulfilling to see my courses making a positive impact on learners globally." },
];

export const shapes = [
  { src: springLeft.src, style: { left: "0%", top: "0%", width: "13.6%" } },
  { src: springWhite.src, style: { left: "10%", top: "6%", width: "8.1%" } },
  { src: coneLeft.src, style: { left: "0%", top: "35%", width: "11.3%" } },
  { src: coneLime.src, style: { right: "12%", top: "2%", width: "13.1%" } },
  { src: torusLime.src, style: { left: "4%", bottom: "0%", width: "16.5%" } },
  { src: coneRight.src, style: { right: "0%", top: "18%", width: "11.3%" } },
  { src: springRight.src, style: { right: "3%", bottom: "0%", width: "13.2%" } },
];
