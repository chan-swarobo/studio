
import { ContactForm } from './contact-form';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us | SWAROBO',
  description: 'Get in touch with SWAROBO for inquiries, collaborations, or more information about our swarm robotics projects.',
};

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Contact <span className="text-primary">SWAROBO</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          We&apos;re excited to hear from you! Whether you have a question, a project idea, or just want to learn more, feel free to reach out.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        <ContactForm />

        <div className="space-y-8 p-4 md:p-0">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Contact Information</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>hello@swarobo.ai</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>(+82) 010-7282-0618</span>
              </li>
              <li className="flex items-start flex-nowrap">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span className="flex-1">
                  Suite 811 (Pan-gyo Startup Zone), 815 Daewangpangyo-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="SWAROBO on Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="SWAROBO on GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="SWAROBO on LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
