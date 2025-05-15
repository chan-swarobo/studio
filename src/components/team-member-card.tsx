
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
  bio?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export function TeamMemberCard({ name, role, imageUrl, imageHint, bio, linkedinUrl, githubUrl }: TeamMemberCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center">
        <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4 border-2 border-primary/50">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-primary">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        {bio && <p className="text-sm text-muted-foreground mb-4">{bio}</p>}
        <div className="flex justify-center space-x-3">
          {linkedinUrl && (
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}>
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`}>
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
