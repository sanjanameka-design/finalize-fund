import { Clock, CheckCircle2, FileSignature, Download, Upload } from "lucide-react";
import Header from "@/components/Header";
import LoanOfferCard from "@/components/LoanOfferCard";
import ProgressTracker from "@/components/ProgressTracker";
import { Button } from "@/components/ui/button";

const FinalSanction = () => {
  const loanData = {
    applicant: "Mr. Aarav Sharma",
    referenceId: "HPR/PSL/120925/4532",
    loanType: "Personal Loan (IndusLand Bank)",
    status: "Processing",
    sanctionedAmount: "10,00,000",
    apr: "10.50%",
    tenure: "60 Months",
  };

  const documents = [
    { name: "Final Sanction Letter", status: "ready", action: "Download" },
    { name: "Loan Agreement", status: "pending", action: "Sign Digitally" },
    { name: "KYC Verification", status: "completed", action: "View" },
    { name: "NACH Mandate", status: "pending", action: "Upload" },
  ];

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
          
          <ProgressTracker currentStep={3} progress={75} />
          
          <div className="status-card">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Current Status: Final Sanction & Agreement (In Progress)
            </h2>
            <p className="text-muted-foreground mb-6">
              Your loan has been sanctioned. Please complete the agreement signing and document submission to proceed.
            </p>
            
            <div className="bg-secondary/50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-foreground mb-2">Next Action / Guidance:</h3>
              <p className="text-muted-foreground italic">
                Sign the loan agreement digitally and submit the NACH mandate to proceed with disbursement.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground">Required Documents & Actions</h3>
              
              <div className="grid gap-4">
                {documents.map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {doc.status === "completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : doc.status === "ready" ? (
                        <Download className="w-5 h-5 text-primary" />
                      ) : doc.action === "Upload" ? (
                        <Upload className="w-5 h-5 text-warning" />
                      ) : (
                        <FileSignature className="w-5 h-5 text-warning" />
                      )}
                      <span className="font-medium text-foreground">{doc.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        doc.status === "completed" 
                          ? "bg-success/10 text-success"
                          : doc.status === "ready"
                          ? "bg-primary/10 text-primary"
                          : "bg-warning/10 text-warning"
                      }`}>
                        {doc.status === "completed" ? "Completed" : doc.status === "ready" ? "Ready" : "Pending"}
                      </span>
                      
                      <Button 
                        variant={doc.status === "completed" ? "outline" : "default"}
                        size="sm"
                        className={doc.status === "completed" ? "" : ""}
                      >
                        {doc.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-elevated p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Agreement Terms Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-secondary/30 rounded-lg">
                <p className="text-muted-foreground text-sm">Monthly EMI</p>
                <p className="amount-highlight text-2xl">₹ 21,494</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <p className="text-muted-foreground text-sm">Total Interest Payable</p>
                <p className="text-foreground text-2xl font-semibold">₹ 2,89,640</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <p className="text-muted-foreground text-sm">Total Amount Payable</p>
                <p className="text-foreground text-2xl font-semibold">₹ 12,89,640</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinalSanction;
