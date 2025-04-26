
import React from "react";

interface FeedbackHeaderProps {
  title: string;
  description: string;
}

const FeedbackHeader: React.FC<FeedbackHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default FeedbackHeader;
