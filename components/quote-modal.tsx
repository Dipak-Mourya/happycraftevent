"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ContactForm } from "./contact-form";

interface QuoteModalProps {
  children: React.ReactNode;
}

export function QuoteModal({ children }: QuoteModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg lg:max-w-2xl max-h-[95vh] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle>Get Your Quote Instantly</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-full">
          <ContactForm SubmitButtonText="Request Quote" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
