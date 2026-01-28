import { Check, Loader2 } from "lucide-react";





const AutomatedStepper = ({ steps, currentStep }) => {
  return (
    <div className="card-elevated p-6">
      <h2 className="text-xl font-semibold text-foreground mb-8">Application Progress</h2>
      
      <div className="relative">
        {/* Progress line background */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-muted z-0" />
        
        {/* Progress line fill */}
        <div 
          className="absolute top-5 left-5 h-0.5 bg-success z-0 transition-all duration-700 ease-out"
          style={{ width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - 40px)` }}
        />
        
        {/* Steps */}
        <div className="relative z-10 flex justify-between">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="flex flex-col items-center"
              style={{ width: '10%' }}
            >
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
                  ${step.state === "completed" 
                    ? "bg-success text-success-foreground" 
                    : step.state === "active" 
                    ? "bg-primary text-primary-foreground animate-pulse-glow" 
                    : "bg-muted text-muted-foreground"}
                `}
              >
                {step.state === "completed" ? (
                  <Check className="w-5 h-5" />
                ) : step.state === "active" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  step.id
                )}
              </div>
              <span 
                className={`
                  mt-2 text-xs text-center max-w-[80px] leading-tight transition-colors duration-300
                  ${step.state === "completed" || step.state === "active" 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground"}
                `}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-right mt-6">
        <span className="text-primary font-medium">
          {Math.round((currentStep / steps.length) * 100)}% Complete
        </span>
      </div>
    </div>
  );
};

export default AutomatedStepper;
