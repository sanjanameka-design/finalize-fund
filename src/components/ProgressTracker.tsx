import { FileText, Users, CreditCard, DollarSign } from "lucide-react";

interface Step {
  id: number;
  label: string;
  icon: React.ReactNode;
  status: "completed" | "active" | "pending";
}

interface ProgressTrackerProps {
  currentStep: number;
  progress: number;
}

const ProgressTracker = ({ currentStep, progress }: ProgressTrackerProps) => {
  const steps: Step[] = [
    {
      id: 1,
      label: "Document Verification",
      icon: <FileText className="w-6 h-6" />,
      status: currentStep > 1 ? "completed" : currentStep === 1 ? "active" : "pending",
    },
    {
      id: 2,
      label: "Credit & Eligibility Check",
      icon: <Users className="w-6 h-6" />,
      status: currentStep > 2 ? "completed" : currentStep === 2 ? "active" : "pending",
    },
    {
      id: 3,
      label: "Final Sanction & Agreement",
      icon: <CreditCard className="w-6 h-6" />,
      status: currentStep > 3 ? "completed" : currentStep === 3 ? "active" : "pending",
    },
    {
      id: 4,
      label: "Disbursement",
      icon: <DollarSign className="w-6 h-6" />,
      status: currentStep > 4 ? "completed" : currentStep === 4 ? "active" : "pending",
    },
  ];

  const getStepIconClass = (status: Step["status"]) => {
    switch (status) {
      case "completed":
        return "step-icon step-icon-completed";
      case "active":
        return "step-icon step-icon-active";
      default:
        return "step-icon step-icon-pending";
    }
  };

  const getLabelClass = (status: Step["status"]) => {
    switch (status) {
      case "completed":
      case "active":
        return "text-primary font-medium";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="card-elevated p-6">
      <h2 className="text-xl font-semibold text-foreground mb-8">Application Progress</h2>
      
      <div className="flex justify-between items-start mb-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center flex-1">
            <div className={getStepIconClass(step.status)}>
              {step.icon}
            </div>
            <span className={`mt-3 text-sm ${getLabelClass(step.status)}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="text-right mt-2">
        <span className="text-primary font-medium">{progress}% Complete</span>
      </div>
    </div>
  );
};

export default ProgressTracker;
