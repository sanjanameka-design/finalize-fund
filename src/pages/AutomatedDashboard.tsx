import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import Header from "@/components/Header";
import LoanOfferCard from "@/components/LoanOfferCard";
import AutomatedStepper, { Step } from "@/components/AutomatedStepper";
import AnimatedStatusCard from "@/components/AnimatedStatusCard";

const STEP_DATA = [
  {
    id: 1,
    title: "Initialized",
    status: "Your application has been received. Your Reference ID is now active, and we've begun processing your request."
  },
  {
    id: 2,
    title: "KYC Auth",
    status: "Verifying identity credentials against government databases... Identity successfully authenticated."
  },
  {
    id: 3,
    title: "Doc Audit",
    status: "Scanning uploaded bank statements and salary slips for income verification."
  },
  {
    id: 4,
    title: "Manager Review",
    status: "A Credit Manager has completed the manual validation of your professional profile."
  },
  {
    id: 5,
    title: "Credit Check",
    status: "Fetching credit report... Your score of 785 has been retrieved and verified."
  },
  {
    id: 6,
    title: "Eligibility",
    status: "Calculating your Debt-to-Income (DTI) ratio against the lending bank's final criteria."
  },
  {
    id: 7,
    title: "Sanction",
    status: "Evaluation complete! Your loan is officially sanctioned. Reviewing final APR and terms."
  },
  {
    id: 8,
    title: "E-Sign",
    status: "Preparing your loan agreement... Please complete the secure electronic signature to proceed."
  },
  {
    id: 9,
    title: "Verification",
    status: "Signed contract verified. Your funds are now queued in the bank's disbursement system."
  },
  {
    id: 10,
    title: "Disbursed",
    status: "Success! ₹ 10,00,000 has been transferred to your account. Your application journey is complete."
  }
];

const AutomatedDashboard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);

  const loanData = {
    applicant: "Mr. Aarav Sharma",
    referenceId: "HPR/PSL/120925/4532",
    loanType: "Personal Loan (IndusLand Bank)",
    status: currentStep === 10 ? "Disbursed" : "Processing",
    sanctionedAmount: "10,00,000",
    apr: "10.50%",
    tenure: "60 Months",
  };

  // Auto-advance through steps
  useEffect(() => {
    if (!isAutoAdvancing || currentStep >= 10) return;

    const advanceDelay = currentStep === 1 ? 2000 : 3000; // First step faster
    
    const timer = setTimeout(() => {
      setCurrentStep(prev => Math.min(prev + 1, 10));
    }, advanceDelay);

    return () => clearTimeout(timer);
  }, [currentStep, isAutoAdvancing]);

  // Stop auto-advancing when complete
  useEffect(() => {
    if (currentStep === 10) {
      setIsAutoAdvancing(false);
    }
  }, [currentStep]);

  const steps: Step[] = STEP_DATA.map((step) => ({
    id: step.id,
    title: step.title,
    status: step.status,
    state: currentStep > step.id 
      ? "completed" 
      : currentStep === step.id 
      ? "active" 
      : "pending"
  }));

  const currentStepData = STEP_DATA.find(s => s.id === currentStep);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-semibold text-foreground">Loan Application Tracker</h1>
        </div>

        <div className="space-y-6">
          <LoanOfferCard {...loanData} />
          
          <AutomatedStepper steps={steps} currentStep={currentStep} />
          
          {currentStepData && (
            <AnimatedStatusCard 
              stepTitle={currentStepData.title}
              statusMessage={currentStepData.status}
              isComplete={currentStep === 10}
            />
          )}

          {/* Manual controls for demo/testing */}
          <div className="card-elevated p-4 flex items-center justify-between">
            <span className="text-muted-foreground text-sm">
              {isAutoAdvancing ? "Auto-advancing..." : "Process complete"}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setIsAutoAdvancing(!isAutoAdvancing)}
                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                disabled={currentStep === 10}
              >
                {isAutoAdvancing ? "Pause" : "Resume"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AutomatedDashboard;
