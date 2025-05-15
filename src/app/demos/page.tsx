
import { DemoCard } from '@/components/demo-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demos | SWAROBO Hub',
  description: 'Explore interactive demos of swarm robotics applications by SWAROBO Hub.',
};

const demos = [
  {
    title: 'Cooperative Object Transport',
    description: 'Witness a swarm of robots collaborating to move an object too large or heavy for a single unit.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'robots carrying',
    videoUrl: '#', // Placeholder link
  },
  {
    title: 'Environmental Monitoring',
    description: 'See how a distributed sensor network of robots can map and monitor environmental conditions in real-time.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'drones nature',
  },
  {
    title: 'Autonomous Search and Rescue',
    description: 'A simulation showcasing robots coordinating to find and assist targets in a disaster scenario.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'rescue robots',
    videoUrl: '#',
  },
  {
    title: 'Precision Agriculture Swarm',
    description: 'Drones working together to monitor crop health, apply targeted treatments, and optimize farming.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'drones farm',
  },
  {
    title: 'Warehouse Automation',
    description: 'A fleet of small robots efficiently sorting and transporting packages in a simulated warehouse environment.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'warehouse robots',
  },
  {
    title: 'Collective Construction',
    description: 'Robots assembling structures by coordinating their actions, demonstrating potential for automated building.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'robots building',
    videoUrl: '#',
  },
];

export default function DemosPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          SWAROBO <span className="text-primary">Demos</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          Explore interactive demonstrations of swarm robotics in action. See how collaborative intelligence is solving complex problems.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <DemoCard
              key={demo.title}
              title={demo.title}
              description={demo.description}
              imageUrl={demo.imageUrl}
              imageHint={demo.imageHint}
              videoUrl={demo.videoUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
