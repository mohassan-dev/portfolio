import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Hassan - Software Development Services",
  description:
    "Hi, I'm Mohamed Hassan, a Full Stack Developer who transforms complex technical challenges into elegant, secure, and scalable solutions. With expertise in Python, Django, React, NextJs, AWS and GCP, I specialize in building full-stack applications that drive business growth and user satisfaction.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
