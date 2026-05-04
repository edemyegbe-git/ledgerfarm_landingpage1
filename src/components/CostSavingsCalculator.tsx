import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, 
  TrendingDown, 
  DollarSign, 
  ArrowRight, 
  ChevronRight,
  Info,
  CheckCircle2,
  PieChart,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CostSavingsCalculator = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    employees: 2,
    avgSalary: 5500, // Monthly salary + bonuses + benefits
    revenuePerClient: 2500,
    clientCount: 16,
  });

  const [isCalculated, setIsCalculated] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const results = useMemo(() => {
    const { employees, avgSalary, clientCount } = formData;
    
    // Current overhead
    const currentMonthlyCost = employees * avgSalary;
    const currentCostPerClient = clientCount > 0 ? currentMonthlyCost / clientCount : 0;

    // LedgerFarm Pod Offer
    // 4499 for max 8 clients
    const podsNeeded = Math.ceil(clientCount / 8);
    const ledgerFarmCost = podsNeeded * 4499;
    const ledgerFarmCostPerClient = clientCount > 0 ? ledgerFarmCost / clientCount : 0;

    const monthlySavings = currentMonthlyCost - ledgerFarmCost;
    const annualSavings = monthlySavings * 12;
    const savingsPercentage = currentMonthlyCost > 0 ? (monthlySavings / currentMonthlyCost) * 100 : 0;

    return {
      currentMonthlyCost,
      currentCostPerClient,
      ledgerFarmCost,
      ledgerFarmCostPerClient,
      monthlySavings,
      annualSavings,
      savingsPercentage,
      podsNeeded
    };
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: e.target.type === 'number' ? parseFloat(value) || 0 : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.companyName.trim()) newErrors.companyName = true;
    if (!formData.email.trim()) newErrors.email = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to top of form if needed or just show errors
      return;
    }

    setErrors({});
    setIsCalculated(true);
  };

  return (
    <section className="py-20 sm:py-32 bg-[#0a2540] text-white overflow-hidden relative" id="calculator">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#3b82f6] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#3b82f6] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-stretch">
          
          {/* Form Side */}
          <div className="flex-1">
            <div className="max-w-xl mx-auto lg:mx-0">
              <Badge className="mb-4 sm:mb-6 bg-[#3b82f6]/20 text-[#3b82f6] border-[#3b82f6]/30 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest leading-none">
                Savings Estimator
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 sm:mb-8 leading-[1.2] lg:leading-[1.1] tracking-tight text-white">
                Calculate How Much <span className="text-[#3b82f6]">You'll Save</span> With a Dedicated Monthly Plan
              </h2>
              <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-12 leading-relaxed">
                Compare your current in-house staffing costs against our specialized pod model. Most firms see 25-35% immediate reduction in overhead.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className={`text-[10px] font-bold uppercase tracking-widest ${errors.name ? 'text-red-400' : 'text-white/60'}`}>Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 sm:py-4 text-white placeholder:text-white/20 focus:outline-none transition-all ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-[10px] font-bold uppercase tracking-widest ${errors.companyName ? 'text-red-400' : 'text-white/60'}`}>Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Acme Accounting"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 sm:py-4 text-white placeholder:text-white/20 focus:outline-none transition-all ${errors.companyName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]'}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-[10px] font-bold uppercase tracking-widest ${errors.email ? 'text-red-400' : 'text-white/60'}`}>Work Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@company.com"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 sm:py-4 text-white placeholder:text-white/20 focus:outline-none transition-all ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]'}`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                      Accountants / Staff
                      <div className="group relative">
                        <Info size={12} className="cursor-help text-white/40" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 normal-case tracking-normal shadow-xl">
                          Number of full-time employees dedicated to client work.
                        </div>
                      </div>
                    </label>
                    <input 
                      type="number" 
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-4 text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                      Avg. Monthly Cost / Staff
                      <div className="group relative">
                        <Info size={12} className="cursor-help text-white/40" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 normal-case tracking-normal shadow-xl">
                          Include base salary + bonuses + insurance + 401k + taxes.
                        </div>
                      </div>
                    </label>
                    <div className="relative">
                      <DollarSign size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input 
                        type="number" 
                        name="avgSalary"
                        value={formData.avgSalary}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3.5 sm:py-4 text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60">Monthly Revenue / Client</label>
                    <div className="relative">
                      <DollarSign size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input 
                        type="number" 
                        name="revenuePerClient"
                        value={formData.revenuePerClient}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3.5 sm:py-4 text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60">Total Client Count</label>
                    <input 
                      type="number" 
                      name="clientCount"
                      value={formData.clientCount}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-4 text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full h-16 rounded-xl bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-bold text-lg transition-all group shadow-[0_20px_40px_rgba(59,130,246,0.3)] mt-4"
                >
                  Generate Savings Report
                  <Calculator className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="flex-1 relative mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-32">
              <AnimatePresence mode="wait">
                {isCalculated ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -30 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="relative group h-full"
                  >
                    <div className="absolute inset-0 bg-[#3b82f6] rounded-[2.5rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <Card className="bg-white/10 backdrop-blur-md border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl h-full border-t border-l border-white/20">
                      <CardContent className="p-6 md:p-12">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-8 sm:mb-12">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                              <TrendingDown size={24} />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Estimated Annual Savings</p>
                              <p className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                                ${results.annualSavings.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-none px-4 py-2 rounded-lg text-sm font-bold shrink-0">
                            {Math.round(results.savingsPercentage)}% Saved
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
                          <div className="p-6 rounded-3xl bg-white/5 border border-white/5 text-center sm:text-left">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-4">Current Monthly Cost</p>
                            <div className="flex items-end justify-center sm:justify-start gap-2">
                              <span className="text-2xl sm:text-3xl font-bold text-white">${results.currentMonthlyCost.toLocaleString()}</span>
                              <span className="text-white/40 text-[10px] mb-1.5 font-medium">/ month</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                              <div className="flex justify-between text-[11px] font-medium">
                                <span className="text-white/40">Cost per client</span>
                                <span className="text-white">${results.currentCostPerClient.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-6 rounded-3xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 relative overflow-hidden group/card shadow-inner text-center sm:text-left">
                            <div className="absolute top-0 right-0 p-3 opacity-20 transform translate-x-1 -translate-y-1 translate-y-0 group-hover/card:scale-110 transition-transform">
                              <Logo className="scale-50" />
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#3b82f6] mb-4">LedgerFarm Pod Model</p>
                            <div className="flex items-end justify-center sm:justify-start gap-2">
                              <span className="text-2xl sm:text-3xl font-bold text-white">${results.ledgerFarmCost.toLocaleString()}</span>
                              <span className="text-[#3b82f6] text-[10px] mb-1.5 font-bold">/ month</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#3b82f6]/20 space-y-2">
                              <div className="flex justify-between text-[11px] font-bold">
                                <span className="text-white/40">Cost per client</span>
                                <span className="text-emerald-400">${results.ledgerFarmCostPerClient.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4 mb-8">
                          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 text-white/70 text-xs sm:text-sm">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                              <Users size={14} className="text-[#3b82f6]" />
                            </div>
                            <p>
                              Your team requires <span className="text-white font-bold">{results.podsNeeded} Specialized {results.podsNeeded > 1 ? 'Pods' : 'Pod'}</span> to handle {formData.clientCount} clients.
                            </p>
                          </div>
                          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 text-white/70 text-xs sm:text-sm">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-emerald-500">
                              <CheckCircle2 size={14} />
                            </div>
                            <p>
                              You could save <span className="text-emerald-400 font-bold">${results.monthlySavings.toLocaleString()} every month</span>.
                            </p>
                          </div>
                        </div>

                        <Button className="w-full h-16 rounded-2xl bg-white text-[#0a2540] hover:bg-slate-200 font-bold text-lg transition-all group">
                          Lock in Your Pricing
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <p className="text-center text-[10px] text-white/40 mt-6 font-medium">
                          *Calculations are estimates based on standard industry salary data.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 sm:p-12 border-2 border-dashed border-white/10 rounded-[2.5rem] bg-white/[0.02]"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/5 flex items-center justify-center text-white/20 mb-6 sm:mb-8 animate-pulse">
                      <Calculator size={48} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">View Your Projected ROI</h3>
                    <p className="text-sm sm:text-base text-white/60 max-w-xs sm:max-w-sm mb-8">
                      Fill out the form to the left to see a direct comparison of your current overhead versus a optimized LedgerFarm pod cost.
                    </p>
                    <div className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="flex items-end gap-[2px]">
      {[4, 3, 6].map((count, idx) => (
        <div key={idx} className="flex flex-col gap-[2px]">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="w-3 h-[3px] bg-current rounded-full" />
          ))}
        </div>
      ))}
    </div>
    <span className="font-display font-bold text-lg tracking-tight leading-none text-current">LedgerFarm</span>
  </div>
);
