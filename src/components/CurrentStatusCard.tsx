interface CurrentStatusCardProps {
  title: string;
  description: string;
  guidanceTitle: string;
  guidanceText: string;
}

const CurrentStatusCard = ({
  title,
  description,
  guidanceTitle,
  guidanceText,
}: CurrentStatusCardProps) => {
  return (
    <div className="status-card">
      <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="bg-secondary/50 rounded-lg p-4">
        <h3 className="font-medium text-foreground mb-2">{guidanceTitle}</h3>
        <p className="text-muted-foreground italic">{guidanceText}</p>
      </div>
    </div>
  );
};

export default CurrentStatusCard;
