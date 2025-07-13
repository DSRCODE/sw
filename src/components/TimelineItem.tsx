import React from 'react';
import { Card } from '@/components/ui/card';

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast: boolean;
}

const TimelineItem = ({ icon, title, description, isLast }: TimelineItemProps) => {
  return (
    <div className="timeline-item relative pl-14 pb-12">
      <div className="absolute left-0 top-2 rounded-full bg-[#1F2937] border-2 border-primary p-2 z-10">
        <div className="text-primary">{icon}</div>
      </div>
      {!isLast && <div className="timeline-connector " />}
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-[#1F2937]">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-white/80">{description}</p>
      </Card>
    </div>
  );
};

export default TimelineItem;
