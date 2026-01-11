interface LoanOfferCardProps {
  applicant: string;
  referenceId: string;
  loanType: string;
  status: string;
  sanctionedAmount: string;
  apr: string;
  tenure: string;
}

const LoanOfferCard = ({
  applicant,
  referenceId,
  loanType,
  status,
  sanctionedAmount,
  apr,
  tenure,
}: LoanOfferCardProps) => {
  return (
    <div className="card-elevated p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">Accepted Loan Offer</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <span className="text-muted-foreground font-medium">Applicant:</span>{" "}
          <span className="text-foreground">{applicant}</span>
        </div>
        <div>
          <span className="text-muted-foreground font-medium">Reference ID:</span>{" "}
          <span className="text-foreground">{referenceId}</span>
        </div>
        <div>
          <span className="text-muted-foreground font-medium">Loan Type:</span>{" "}
          <span className="text-foreground">{loanType}</span>
        </div>
        <div>
          <span className="text-muted-foreground font-medium">Status:</span>{" "}
          <span className="status-badge-processing">{status}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        <div>
          <span className="text-muted-foreground font-medium">Sanctioned Amount:</span>{" "}
          <span className="amount-highlight text-xl">₹ {sanctionedAmount}</span>
        </div>
        <div className="lg:col-start-3">
          <span className="text-muted-foreground font-medium">APR:</span>{" "}
          <span className="text-foreground">{apr}</span>
        </div>
        <div>
          <span className="text-muted-foreground font-medium">Tenure:</span>{" "}
          <span className="text-foreground">{tenure}</span>
        </div>
      </div>
    </div>
  );
};

export default LoanOfferCard;
