import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";
import { PricingTable } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Pricing from "@/components/pricing";

export default async function PricingPage() {
  return (
    <div className="container px-20 mx-auto pb-8">
      {/* Header Section */}
      <div className="flex justify-start py-4">
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
      {/* Pricing Table Section */}
      <Pricing />
    </div>
  );
}
