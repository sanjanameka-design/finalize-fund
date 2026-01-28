import { Download, CheckCircle2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";



const DisbursementLetter = ({
  applicant,
  referenceId,
  amount,
  bankName,
  accountNumber,
  disbursementDate,
}) => {
  
  const generateLetterContent = () => {
    return `
HAPPIRATE FINANCIAL SERVICES
══════════════════════════════════════════════════════════════════

                    LOAN DISBURSEMENT CONFIRMATION LETTER

══════════════════════════════════════════════════════════════════

Date: ${disbursementDate}
Reference ID: ${referenceId}

Dear ${applicant},

CONGRATULATIONS! 🎉

We are pleased to inform you that your Personal Loan application has been 
successfully processed and the funds have been disbursed to your bank account.

══════════════════════════════════════════════════════════════════
                         DISBURSEMENT DETAILS
══════════════════════════════════════════════════════════════════

Loan Amount Disbursed:     ₹ ${amount}
Bank Name:                 ${bankName}
Account Number:            ${accountNumber}
Disbursement Date:         ${disbursementDate}
Loan Type Loan
Lending Partner Bank

══════════════════════════════════════════════════════════════════
                         IMPORTANT INFORMATION
══════════════════════════════════════════════════════════════════

• Your first EMI will be debited from your registered bank account as per 
  the agreed repayment schedule.

• Please ensure sufficient balance in your NACH-registered account on 
  the EMI due date to avoid any late payment charges.

• For any queries regarding your loan, please contact our 24/7 customer 
  support at 1800-XXX-XXXX or email us at support@happirate.com.

• You can track your EMI payments and download statements from your 
  online dashboard at any time.

══════════════════════════════════════════════════════════════════

Thank you for choosing HAPPIRATE Financial Services. We are committed 
to providing you with the best financial solutions.

Warm Regards,

The HAPPIRATE Team
Customer Success Department

══════════════════════════════════════════════════════════════════
This is a system-generated document and does not require a signature.
══════════════════════════════════════════════════════════════════
    `.trim();
  };

  const handleDownload = () => {
    const content = generateLetterContent();
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Disbursement_Letter_${referenceId.replace(/\//g, "_")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const content = generateLetterContent();
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Disbursement Letter - ${referenceId}</title>
            <style>
              body {
                font-family: 'Courier New', monospace;
                padding: 40px;
                white-space: pre-wrap;
                line-height: 1.6;
              }
            </style>
          </head>
          <body>${content}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="card-elevated border-2 border-success/30 overflow-hidden">
      <div className="bg-success/10 p-6 border-b border-success/20">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle2 className="w-8 h-8 text-success" />
          <h3 className="text-2xl font-bold text-foreground">
            Disbursement Successful!
          </h3>
        </div>
        <p className="text-muted-foreground">
          Your loan of <span className="font-bold text-success">₹ {amount}</span> has been 
          transferred to your account ending in {accountNumber.slice(-4)}.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Reference ID</p>
            <p className="font-semibold text-foreground">{referenceId}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Amount</p>
            <p className="font-bold text-success text-lg">₹ {amount}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Bank</p>
            <p className="font-semibold text-foreground">{bankName}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Date</p>
            <p className="font-semibold text-foreground">{disbursementDate}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={handleDownload} className="flex-1 gap-2">
            <Download className="w-4 h-4" />
            Download Disbursement Letter
          </Button>
          <Button onClick={handlePrint} variant="outline" className="flex-1 gap-2">
            <Printer className="w-4 h-4" />
            Print Letter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisbursementLetter;
