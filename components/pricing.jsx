"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";
import PricingSection from "./pricing-section";

const Pricing = () => {
  return (
    <>
        <PricingSection />
        <div className="bg-slate-800/30 pb-8 md:pb-10 px-20">
            <PricingTable
            checkoutProps={{
                appearance: {
                elements: {
                    drawerRoot: {
                    zIndex: 2000,
                    },
                },
                },
            }}
            />
        </div>
    </>
  );
};

export default Pricing;
