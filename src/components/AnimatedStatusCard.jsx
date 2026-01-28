import { useEffect, useState } from "react";



const AnimatedStatusCard = ({ stepTitle, statusMessage, isComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [stepTitle, statusMessage]);

  return (
    <div className={`status-card transition-all duration-300 ${isComplete ? 'border-l-success' : ''}`}>
      <div 
        className={`transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Current Status: {stepTitle}
        </h2>
        <p className="text-muted-foreground mb-6 text-lg">
          {statusMessage}
        </p>
        
        {!isComplete && (
          <div className="bg-secondary/50 rounded-lg p-4">
            <h3 className="font-medium text-foreground mb-2">Processing...</h3>
            <p className="text-muted-foreground italic">
              Please wait while we complete this step automatically.
            </p>
          </div>
        )}

        {isComplete && (
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <h3 className="font-medium text-success mb-2">🎉 Application Complete!</h3>
            <p className="text-muted-foreground">
              Your loan has been successfully disbursed. Check your bank account for the funds.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedStatusCard;
