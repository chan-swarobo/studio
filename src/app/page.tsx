
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Users, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="text-center pt-8 md:pt-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Welcome to <span className="text-primary">Swarobo Hub</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl">
          Pioneering the future of autonomous systems through collaborative swarm robotics. Explore cutting-edge demonstrations and learn about our mission to innovate.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/demos">
              Explore Demos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Swarm Robotics?</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Swarm robotics offers unparalleled advantages in complex tasks, scalability, and robustness. Discover how Swarobo Hub is harnessing this potential.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Efficiency & Scalability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Swarms can perform tasks faster and adapt to growing demands more easily than single, complex robots.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Robustness & Redundancy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                The failure of individual units minimally impacts the overall mission, ensuring high reliability.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Complex Problem Solving</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Distributed intelligence allows swarms to tackle intricate challenges beyond the scope of individual agents.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visuals Section */}
      <section className="py-12 md:py-16 bg-muted/50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Visualizing the Future</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Imagine autonomous swarms transforming industries and solving global challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Swarm robotics concept 1"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-auto"
            data-ai-hint="robot swarm"
          />
          <Image
            src="https://placehold.co/600x400.png"
            alt="Swarm robotics concept 2"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-auto"
            data-ai-hint="drone formation"
          />
        </div>
      </section>
    </div>
  );
}
