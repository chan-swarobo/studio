
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface DemoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  videoUrl?: string; // Optional: for video or interactive simulation link
  learnMoreUrl?: string;
}

export function DemoCard({ title, description, imageUrl, imageHint, videoUrl, learnMoreUrl = "#" }: DemoCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video relative mb-4">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            data-ai-hint={imageHint}
          />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto pt-4">
        {videoUrl ? (
          <Button asChild variant="outline" className="w-full">
            <Link href={videoUrl} target="_blank" rel="noopener noreferrer">
              Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="secondary" className="w-full" disabled={learnMoreUrl === "#"}>
            <Link href={learnMoreUrl}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
