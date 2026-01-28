import { Clock } from "lucide-react";
import Header from "@/components/Header";
import LoanOfferCard from "@/components/LoanOfferCard";
import ProgressTracker from "@/components/ProgressTracker";
import CurrentStatusCard from "@/components/CurrentStatusCard";
import ActionCard from "@/components/ActionCard";

const LoanTracker = () => {
  const loanData = {
    applicant: "Mr. Aarav Sharma",
    referenceId: "HPR/PSL/120925/4532",
    loanType: "Personal Loan (IndusLand Bank)",
    status: "Processing",
    sanctionedAmount: "10,00,000",
    apr: "10.50%",
    tenure: "60 Months",
  };

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
          
          <ProgressTracker currentStep={2} progress={50} />
          
          <CurrentStatusCard 
            title="Current Status & Eligibility Check (In Progress)"
            description="Your credit score (785) and DTI ratio are being reviewed against the final eligibility criteria of IndusLand Bank."
            guidanceTitle="Next Action / Guidance:"
            guidanceText="No action required from you at this time. This usually takes 24-48 hours."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActionCard 
              title="Need Help?"
              description="Contact your dedicated Relationship Manager for faster updates."
              actionText="Call Support"
            />
            <ActionCard 
              title="Check Documents"
              description="Review the files you submitted during the application process."
              actionText="View Files"
            />
            <ActionCard 
              title="View Offer Letter"
              description="Download your Provisional Sanction Letter again."
              actionText="Download PSL"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoanTracker;
