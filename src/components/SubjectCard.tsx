
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
}

const SubjectCard = ({ title, description, icon: Icon, path, color }: SubjectCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-2`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          Access comprehensive practice materials, sample problems, and detailed explanations for {title.toLowerCase()} topics.
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={path}>Explore {title}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
