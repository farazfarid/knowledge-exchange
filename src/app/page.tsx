import { Card } from "@/components/card";
import dynamic from 'next/dynamic';

// Dynamically import the animated hero section with client-side rendering
const AnimatedHero = dynamic(() => import('@/components/animated-hero'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedHero />

      {/* Features Section */}
      <section className="min-h-screen bg-muted/30 py-32 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Topics
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "React Basics",
                description: "Master the fundamentals of modern React development.",
                icon: "⚛️"
              },
              {
                title: "Next.js",
                description: "Build powerful full-stack applications with Next.js.",
                icon: "🚀"
              },
              {
                title: "Tailwind CSS",
                description: "Create beautiful, responsive designs efficiently.",
                icon: "🎨"
              }
            ].map((topic, index) => (
              <Card
                key={topic.title}
                title={`${topic.icon} ${topic.title}`}
                description={topic.description}
                className="hover:scale-105 transition-transform"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
