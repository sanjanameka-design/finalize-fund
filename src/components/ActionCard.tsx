interface ActionCardProps {
  title: string;
  description: string;
  actionText: string;
  onAction?: () => void;
}

const ActionCard = ({ title, description, actionText, onAction }: ActionCardProps) => {
  return (
    <div className="card-elevated p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <button 
        onClick={onAction}
        className="link-primary text-left"
      >
        {actionText}
      </button>
    </div>
  );
};

export default ActionCard;
