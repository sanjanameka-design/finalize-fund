import { Clock, CheckCircle2, Building2, CreditCard, Calendar, IndianRupee } from "lucide-react";
import Header from "@/components/Header";
import LoanOfferCard from "@/components/LoanOfferCard";
import ProgressTracker from "@/components/ProgressTracker";
import { Button } from "@/components/ui/button";

const Disbursement = () => {
  const loanData = {
    applicant: "Mr. Aarav Sharma",
    referenceId: "HPR/PSL/120925/4532",
    loanType: "Personal Loan (IndusLand Bank)",
    status: "Disbursed",
    sanctionedAmount: "10,00,000",
    apr: "10.50%",
    tenure: "60 Months",
  };

  const disbursementDetails = {
    bankName: "HDFC Bank",
    accountNumber: "XXXX XXXX 5678",
    ifscCode: "HDFC0001234",
    disbursedAmount: "9,85,000",
    disbursementDate: "15 Jan 2026",
    firstEmiDate: "15 Feb 2026",
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
          
          <ProgressTracker currentStep={4} progress={100} />
          
          <div className="card-elevated border-l-4 border-l-success p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-8 h-8 text-success" />
              <h2 className="text-2xl font-semibold text-foreground">
                Disbursement Complete
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Congratulations! Your loan has been successfully disbursed to your bank account. 
              You can start using the funds immediately.
            </p>
            
            <div className="bg-success/5 border border-success/20 rounded-lg p-4">
              <h3 className="font-medium text-foreground mb-2">Next Steps:</h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>Your first EMI will be due on {disbursementDetails.firstEmiDate}</li>
                <li>Ensure sufficient balance in your NACH registered account</li>
                <li>Download your loan documents for your records</li>
              </ul>
            </div>
          </div>

          <div className="card-elevated p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Disbursement Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Building2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground text-sm">Bank Name</p>
                  <p className="text-foreground font-semibold">{disbursementDetails.bankName}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <CreditCard className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground text-sm">Account Number</p>
                  <p className="text-foreground font-semibold">{disbursementDetails.accountNumber}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Building2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground text-sm">IFSC Code</p>
                  <p className="text-foreground font-semibold">{disbursementDetails.ifscCode}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-success/10 rounded-lg">
                <IndianRupee className="w-6 h-6 text-success mt-1" />
                <div>
                  <p className="text-muted-foreground text-sm">Amount Disbursed</p>
                  <p className="amount-highlight text-2xl">₹ {disbursementDetails.disbursedAmount}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Calendar className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground text-sm">Disbursement Date</p>
                  <p className="text-foreground font-semibold">{disbursementDetails.disbursementDate}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-warning/10 rounded-lg">
                <Calendar className="w-6 h-6 text-warning mt-1" />
                <div>
                  <p className="text-muted-foreground text-sm">First EMI Due</p>
                  <p className="text-foreground font-semibold">{disbursementDetails.firstEmiDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Repayment Schedule</h3>
              <p className="text-muted-foreground mb-4">
                View your complete EMI schedule with principal and interest breakdown.
              </p>
              <Button className="w-full">Download Schedule</Button>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Loan Documents</h3>
              <p className="text-muted-foreground mb-4">
                Download all your loan agreement documents and receipts.
              </p>
              <Button variant="outline" className="w-full">Download All Documents</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Disbursement;
