import { Phone, FileText, Download, Eye, Upload, FileSignature, CheckCircle2 } from "lucide-react";

interface ActionCardData {
  title: string;
  description: string;
  actionText: string;
  icon: React.ReactNode;
  type: "download" | "view" | "action";
}

interface StepActionCardsProps {
  currentStep: number;
  onDownloadLetter?: () => void;
}

const STEP_ACTIONS: Record<number, ActionCardData[]> = {
  1: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "View Application", description: "Review the details you submitted during the application.", actionText: "View Details", icon: <Eye className="w-5 h-5" />, type: "view" },
    { title: "Application Receipt", description: "Download your application acknowledgment receipt.", actionText: "Download Receipt", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  2: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "KYC Documents", description: "View the identity documents submitted for verification.", actionText: "View Files", icon: <FileText className="w-5 h-5" />, type: "view" },
    { title: "Identity Report", description: "Download your KYC verification acknowledgment.", actionText: "Download KYC", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  3: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "Check Documents", description: "Review the files you submitted during the application process.", actionText: "View Files", icon: <FileText className="w-5 h-5" />, type: "view" },
    { title: "Document Checklist", description: "Download your document verification checklist.", actionText: "Download Checklist", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  4: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "Professional Profile", description: "View your employment and income details on file.", actionText: "View Profile", icon: <Eye className="w-5 h-5" />, type: "view" },
    { title: "Validation Report", description: "Download the manager's preliminary review report.", actionText: "Download Report", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  5: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "Check Documents", description: "Review the files you submitted during the application process.", actionText: "View Files", icon: <FileText className="w-5 h-5" />, type: "view" },
    { title: "Credit Report", description: "Download your credit score and history report.", actionText: "Download Report", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  6: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "Eligibility Details", description: "View DTI ratio and eligibility calculation breakdown.", actionText: "View Details", icon: <Eye className="w-5 h-5" />, type: "view" },
    { title: "Eligibility Report", description: "Download your complete eligibility assessment.", actionText: "Download Report", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  7: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "Loan Terms", description: "Review your approved APR, EMI schedule and terms.", actionText: "View Terms", icon: <Eye className="w-5 h-5" />, type: "view" },
    { title: "Sanction Letter", description: "Download your official loan sanction letter.", actionText: "Download PSL", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  8: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "Loan Agreement", description: "Review and digitally sign your loan agreement.", actionText: "Sign Now", icon: <FileSignature className="w-5 h-5" />, type: "action" },
    { title: "Agreement Draft", description: "Download the loan agreement for your records.", actionText: "Download Agreement", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  9: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for faster updates.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "Signed Documents", description: "View all signed documents and verification status.", actionText: "View Docs", icon: <CheckCircle2 className="w-5 h-5" />, type: "view" },
    { title: "Signed Agreement", description: "Download your signed loan agreement copy.", actionText: "Download Copy", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
  10: [
    { title: "Need Help?", description: "Contact your dedicated Relationship Manager for any queries.", actionText: "Call Support", icon: <Phone className="w-5 h-5" />, type: "action" },
    { title: "EMI Schedule", description: "View your complete EMI repayment schedule.", actionText: "View Schedule", icon: <Eye className="w-5 h-5" />, type: "view" },
    { title: "Disbursement Letter", description: "Download your official disbursement confirmation letter.", actionText: "Download Letter", icon: <Download className="w-5 h-5" />, type: "download" },
  ],
};

const StepActionCards = ({ currentStep, onDownloadLetter }: StepActionCardsProps) => {
  const actions = STEP_ACTIONS[currentStep] || STEP_ACTIONS[1];

  const handleAction = (action: ActionCardData) => {
    if (currentStep === 10 && action.title === "Disbursement Letter" && onDownloadLetter) {
      onDownloadLetter();
    } else {
      // Placeholder for other actions
      console.log(`Action triggered: ${action.title}`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {actions.map((action, index) => (
        <div key={index} className="card-elevated p-6 flex flex-col h-full">
          <div className="flex items-start gap-3 mb-3">
            <div className="text-primary">{action.icon}</div>
            <h3 className="text-xl font-semibold text-foreground">{action.title}</h3>
          </div>
          <p className="text-muted-foreground mb-4 flex-grow">{action.description}</p>
          <button 
            onClick={() => handleAction(action)}
            className="link-primary text-left"
          >
            {action.actionText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default StepActionCards;
