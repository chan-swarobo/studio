
import { TeamMemberCard } from '@/components/team-member-card';
import { Target, Users, Rocket } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | SWAROBO Hub',
  description: 'Learn about SWAROBO Hub, our mission, and the team driving innovation in swarm robotics.',
};

const teamMembers = [
  {
    name: 'Dr. Elara Vance',
    role: 'Lead Robotics Engineer',
    imageUrl: 'https://placehold.co/200x200.png',
    imageHint: 'scientist portrait',
    bio: 'Expert in multi-agent systems and AI-driven coordination.',
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Jaxson Lee',
    role: 'Senior Software Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    imageHint: 'developer portrait',
    bio: 'Architecting robust software for complex robotic interactions.',
    linkedinUrl: '#',
  },
  {
    name: 'Aisha Khan',
    role: 'UX/UI Designer',
    imageUrl: 'https://placehold.co/200x200.png',
    imageHint: 'designer portrait',
    bio: 'Crafting intuitive interfaces for human-swarm interaction.',
    githubUrl: '#',
  },
   {
    name: 'Ben Carter',
    role: 'Research Scientist',
    imageUrl: 'https://placehold.co/200x200.png',
    imageHint: 'researcher portrait',
    bio: 'Exploring novel algorithms for swarm behavior and adaptation.',
    linkedinUrl: '#',
  },
];

export default function InfoPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          About <span className="text-primary">SWAROBO Hub</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          Dedicated to advancing the field of swarm robotics through research, development, and education.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Team working on robotics"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
            data-ai-hint="team collaboration"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To unlock the transformative potential of swarm robotics by creating intelligent, adaptable, and collaborative autonomous systems that address real-world challenges and inspire future innovations.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
              <Rocket className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                We envision a future where swarms of intelligent robots seamlessly integrate into society, enhancing efficiency, safety, and sustainability across various domains, from environmental conservation to industrial automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="text-center mb-12">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The passionate minds behind SWAROBO Hub, driving the future of autonomous collaboration.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              imageHint={member.imageHint}
              bio={member.bio}
              linkedinUrl={member.linkedinUrl}
              githubUrl={member.githubUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
