import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CustomerForm = () => {
  const navigate = useNavigate();
  const [customerData, setFormData] = useState({
    fullName: "Marco Rossi",
    email: "marco.rossi@example.com",
    phone: "+39 333 123 4567",
    spidCode: "SPID-123456789",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/calculator", { state: customerData });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-volvo-primary mb-6">
        Customer Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={customerData.fullName}
            onChange={(e) => setFormData({ ...customerData, fullName: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={customerData.email}
            onChange={(e) => setFormData({ ...customerData, email: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={customerData.phone}
            onChange={(e) => setFormData({ ...customerData, phone: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="spidCode">SPID Code</Label>
          <Input
            id="spidCode"
            value={customerData.spidCode}
            onChange={(e) => setFormData({ ...customerData, spidCode: e.target.value })}
            required
            className="border-volvo-secondary"
          />
          <p className="text-sm text-gray-500 mt-1">
            Enter your SPID (Sistema Pubblico di Identità Digitale) code
          </p>
        </div>
        <Button 
          type="submit"
          className="w-full bg-volvo-primary hover:bg-volvo-primary/90 text-white py-6"
        >
          Continue to Calculator
        </Button>
      </form>
    </div>
  );
};