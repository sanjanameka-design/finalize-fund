import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, CreditCard, DollarSign } from "lucide-react";

const Index = () => {
  const pages = [
    {
      title: "Loan Tracker - Credit Check",
      description: "View the application at Credit & Eligibility Check stage (50% complete)",
      path: "/loan-tracker",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      title: "Final Sanction & Agreement",
      description: "View the application at Final Sanction stage (75% complete)",
      path: "/final-sanction",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      title: "Disbursement",
      description: "View the application at Disbursement complete stage (100% complete)",
      path: "/disbursement",
      icon: <DollarSign className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Loan Application Tracker Demo
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore different stages of the loan application process
          </p>
        </div>

        <div className="grid gap-6 max-w-2xl mx-auto">
          {pages.map((page, index) => (
            <Link 
              key={index}
              to={page.path}
              className="card-elevated p-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-4">
                <div className="step-icon step-icon-active">
                  {page.icon}
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {page.title}
                  </h2>
                  <p className="text-muted-foreground">{page.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
