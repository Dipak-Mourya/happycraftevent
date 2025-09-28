"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}
 interface ContactFormProps {
    SubmitButtonText: string;
 }
export function ContactForm({ SubmitButtonText }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const serviceOptions = [
    "Event Management",
    "Wedding Planning",
    "Corporate Events",
    "Brand Launch",
    "Exhibition & Trade Shows",
    "Conference & Seminars",
    "Product Launch",
    "Other"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{9,14}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Log form data to console
      console.log("Form submitted with data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours. Thank you for reaching out!",
        variant: "success"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value,
    }));
    
    // Clear error when user selects a service
    if (errors.service) {
      setErrors(prev => ({
        ...prev,
        service: undefined,
      }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>Send us a Message</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="space-y-2 w-full">
            <Label htmlFor="service">Service Required *</Label>
            <Select value={formData.service} onValueChange={handleServiceChange} >
              <SelectTrigger className={errors.service ? "border-red-500 w-full" : "w-full"}>
                <SelectValue placeholder="Select a service" className="w-full"/>
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className={`resize-none ${errors.message ? "border-red-500" : ""}`}
              placeholder="Type your message..."
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 hover:bg-muted-foreground cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="flex-1  cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : `${SubmitButtonText}`}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}