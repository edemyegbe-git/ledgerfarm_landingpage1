import React, { useState, useEffect } from "react";
import heroImage from "./assets/hero.png";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Briefcase, 
  FileText, 
  CreditCard,
  ChevronDown,
  Star,
  ExternalLink,
  Menu,
  X,
  MessageSquare,
  Zap,
  UserCheck,
  LayoutGrid,
  Calendar,
  ArrowUpRight,
  Megaphone,
  Phone,
  Settings,
  Check,
  Send,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradient } from "@/src/components/AnimatedGradient";
import { GridShimmer } from "@/src/components/GridShimmer";
import { CostSavingsCalculator } from "@/src/components/CostSavingsCalculator";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="flex items-end gap-[3px]">
      <div className="flex flex-col gap-[2px]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-4 h-[4px] bg-[#0a2540] dark:bg-white rounded-full" />
        ))}
      </div>
      <div className="flex flex-col gap-[2px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-4 h-[4px] bg-[#0a2540] dark:bg-white rounded-full" />
        ))}
      </div>
      <div className="flex flex-col gap-[2px]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-4 h-[4px] bg-[#0a2540] dark:bg-white rounded-full" />
        ))}
      </div>
    </div>
    <span className="font-display font-bold text-3xl tracking-tight text-[#0a2540] dark:text-white leading-none">LedgerFarm</span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 rounded-full transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm" : "bg-transparent"}`}>
          <Logo className="scale-[0.8] md:scale-[0.85] lg:scale-100 origin-left" />

          <div className="hidden lg:flex items-center bg-[#0a2540] rounded-full px-2 py-1.5 gap-1 shadow-lg mx-2">
            <a href="#services" className="text-[13px] font-semibold px-4 py-2 rounded-full text-white hover:bg-white/10 transition-all">Services</a>
            <a href="#how-it-works" className="text-[13px] font-semibold px-4 py-2 rounded-full text-white hover:bg-white/10 transition-all">How It Works</a>
            <a href="#pricing" className="text-[13px] font-semibold px-4 py-2 rounded-full text-white hover:bg-white/10 transition-all">Pricing</a>
            <a href="#faqs" className="text-[13px] font-semibold px-4 py-2 rounded-full text-white hover:bg-white/10 transition-all">FAQs</a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+17349340488" className="flex items-center gap-2 text-[14px] font-bold text-[#0a2540] hover:text-[#3b82f6] transition-all group">
              <div className="w-8 h-8 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all shrink-0">
                <Phone size={14} />
              </div>
              <span className="hidden xl:inline">+1 734 934 0488</span>
            </a>
            <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} variant="outline" size="sm" className="rounded-full px-6 border-[#0a2540] text-[#0a2540] font-bold hover:bg-[#0a2540] hover:text-white transition-all whitespace-nowrap uppercase tracking-widest text-[11px]">Get started</Button>
          </div>

          <button className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0a2540] dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 flex flex-col gap-5 shadow-2xl overflow-hidden"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#0a2540] dark:text-white px-2 py-1">Services</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#0a2540] dark:text-white px-2 py-1">How It Works</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#0a2540] dark:text-white px-2 py-1">Pricing</a>
            <a href="#faqs" onClick={() => setIsMobileMenuOpen(false) } className="text-xl font-bold text-[#0a2540] dark:text-white px-2 py-1">FAQs</a>
            <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
            <a href="tel:+17349340488" className="flex items-center gap-3 text-xl font-bold text-[#0a2540] dark:text-white py-2">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6]">
                <Phone size={20} />
              </div>
              +1 734 934 0488
            </a>
            <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} className="w-full h-14 text-lg rounded-2xl bg-[#0a2540] dark:bg-white dark:text-[#0a2540]">Book a Call</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroCard = ({ title, value, subValue, icon: Icon, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass p-5 rounded-xl flex items-center gap-4 relative overflow-hidden group"
    >
      <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shrink-0">
        <Icon size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#475569] mb-0.5">{title}</span>
        <span className="text-base font-bold text-[#0a2540] dark:text-white leading-tight">{value}</span>
        <span className="text-[12px] font-semibold text-[#3b82f6] mt-0.5">{subValue}</span>
      </div>
      <div className="stat-card-line" />
    </motion.div>
  );
};

const FeatureIcon = ({ icon: Icon }: { icon: any }) => (
  <motion.div 
    whileHover={{ rotate: 15, scale: 1.1 }}
    className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] mb-5"
  >
    <Icon size={24} />
  </motion.div>
);

const TasksCompletedCard = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 }}
    className="absolute -left-1 sm:-left-12 top-1/4 glass p-2 sm:p-4 rounded-2xl shadow-xl border border-white/20 z-20 w-28 sm:w-52"
  >
    <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 sm:mb-3">
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
        <CheckCircle2 size={12} className="sm:size-4" />
      </div>
      <div>
        <p className="text-[7px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5 sm:mb-1">Notification</p>
        <p className="text-[9px] sm:text-[12px] font-bold text-[#0a2540] dark:text-white leading-none">Task Completed</p>
      </div>
    </div>
    <div className="space-y-1 sm:space-y-2">
      <div className="h-1 sm:h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="h-full bg-green-500" 
        />
      </div>
      <p className="text-[7px] sm:text-[10px] text-slate-500 font-medium italic">"Review ready"</p>
    </div>
  </motion.div>
);

const HiringSpeedCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className="absolute -right-1 sm:-right-12 -top-10 sm:-top-16 glass p-2 sm:p-5 rounded-2xl shadow-2xl border border-white/20 z-20 w-36 sm:w-64"
  >
    <div className="flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-4">
      <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shrink-0">
        <Calendar size={12} className="sm:size-5" />
      </div>
      <p className="text-[10px] sm:text-sm font-bold text-[#0a2540] dark:text-white leading-tight">Avg. Hiring Time</p>
    </div>
    
    <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-2 sm:mb-4">
      {Array.from({ length: 7 }).map((_, i) => (
        <div 
          key={i} 
          className={`h-4 sm:h-6 rounded-md flex items-center justify-center relative ${
            i < 6 
              ? "bg-slate-100 dark:bg-slate-800 text-slate-400" 
              : "bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/30"
          }`}
        >
          <span className="text-[7px] sm:text-[10px] font-bold">{i + 1}</span>
          {i < 6 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[1px] bg-red-400 rotate-[35deg] opacity-50 rounded-full" />
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between gap-1 sm:gap-3 mb-2 sm:mb-4">
      <div className="flex items-center gap-1">
        <span className="text-[6px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Mkt: 6wk</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[6px] sm:text-[10px] text-[#3b82f6] font-bold uppercase tracking-wider">Us: 1wk</span>
      </div>
    </div>

    <div className="pt-2 sm:pt-4 border-t border-slate-100 dark:border-white/5">
      <div className="flex items-center justify-between">
        <span className="text-[9px] sm:text-[13px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-tight">
          Save 5+ Wks
        </span>
        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
          <TrendingUp size={10} className="sm:size-3" />
        </div>
      </div>
    </div>
  </motion.div>
);

const SavingsCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2 }}
    className="absolute -bottom-6 -right-1 sm:-bottom-8 sm:-right-8 glass p-2.5 sm:p-6 rounded-2xl shadow-2xl border border-white/20 z-20 w-36 sm:w-64"
  >
    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
      <p className="text-[7px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Cost Reduction</p>
      <div className="px-1 py-0.5 rounded bg-green-500/10 text-green-600 text-[6px] sm:text-[8px] font-bold">ACTIVE</div>
    </div>
    
    <div className="mb-3 sm:mb-6 flex flex-col items-center text-center">
      <div className="flex items-center gap-1 sm:gap-1.5 text-[#22c55e] mb-1">
        <CheckCircle2 size={10} className="sm:size-4" />
        <h4 className="text-lg sm:text-3xl font-display font-bold text-[#0a2540] dark:text-white leading-none">$30,000</h4>
      </div>
      <p className="text-[8px] sm:text-[11px] font-bold text-[#3b82f6] uppercase tracking-wider">Avg. Annual Savings</p>
    </div>

    <div className="space-y-1 sm:space-y-2">
      {[
        "Hiring Fees",
        "Benefits & Taxes"
      ].map((label, i) => (
        <div key={i} className="relative flex justify-center py-0.5">
          <span className="text-[10px] sm:text-sm font-bold text-slate-500 dark:text-slate-400 relative z-10">
            {label}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "110%" }}
              transition={{ delay: 1.5 + (i * 0.2), duration: 0.5 }}
              className="absolute top-1/2 left-[-5%] h-[1px] sm:h-[2px] bg-red-400/60 rounded-full"
            />
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-[750px] mx-auto">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#3b82f6]/10 via-transparent to-[#0a2540]/5 rounded-full blur-[100px] -z-10" />

      {/* Main Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Productive Business Professional"
            className="w-full h-auto object-contain mix-blend-multiply dark:mix-blend-screen"
          />
          {/* Fade all edges into site background */}
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-white/40 dark:to-slate-950/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 dark:from-slate-950/70 via-transparent to-white/70 dark:to-slate-950/70 pointer-events-none" />
        </div>
      </motion.div>

      {/* Floating Cards */}
      <TasksCompletedCard />
      <HiringSpeedCard />
      <SavingsCard />

      {/* Decorative Circles/Lines like in the reference - Modern BLUE dashed lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 400 400">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M 50 150 Q 80 50 200 80 Q 320 110 350 200 Q 380 350 250 380"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="opacity-40"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          d="M 380 180 Q 300 120 150 160 Q 50 200 80 320"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="opacity-20"
        />
      </svg>
    </div>
  );
};

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <div className="relative min-h-screen selection:bg-[#3b82f6] selection:text-white" onMouseMove={handleMouseMove}>
      <Navbar />
      <AnimatedGradient />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <GridShimmer />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 sm:gap-16 lg:gap-24 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-6 sm:mb-10">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shrink-0">
                  <Megaphone size={16} className="sm:size-5 -rotate-12" />
                </div>
                <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#3b82f6]">Attention: Accounting Firm Owners!</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-[72px] font-display font-bold leading-[1.1] lg:leading-[1.05] mb-6 sm:mb-10 text-[#0a2540] dark:text-white tracking-tight sm:tracking-tighter">
                Increase Your <span className="serif font-normal text-[#3b82f6]">Service Capacity</span> in 1 Week — Without the Hiring Headaches
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-[#475569] dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Staffing your accounting firm is stressful, expensive, and time-consuming. With proven workflows and a team of experienced CPAs and accountants, let us handle the low-level tasks so you can focus on more high-value work.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 mb-10 sm:mb-12">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 size={12} className="sm:size-4" />
                  </div>
                  <span className="text-[13px] sm:text-[15px] font-bold text-[#0a2540] dark:text-white">30-Day Moneyback Guarantee</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 size={12} className="sm:size-4" />
                  </div>
                  <span className="text-[13px] sm:text-[15px] font-bold text-[#0a2540] dark:text-white">Fast Onboarding</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center justify-center lg:justify-start">
                <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} size="lg" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-[#0a2540] hover:bg-[#3b82f6] text-white group transition-all duration-300 shadow-xl">
                  Book a Free Call
                </Button>
                
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                    ].map((img, i) => (
                      <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-slate-950 overflow-hidden shadow-xl shrink-0">
                        <img src={img} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={14} className="sm:size-4 fill-[#3b82f6] text-[#3b82f6]" />
                      ))}
                      <span className="text-base sm:text-lg font-black ml-1 text-[#0a2540] dark:text-white leading-none">4.9</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#475569] uppercase tracking-widest mt-1">from partner firms</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative px-4 sm:px-0"
            >
              <HeroVisual />
              {/* Decorative elements to match the "beam" texture */}
              <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#3b82f6]/5 rounded-full blur-[60px] sm:blur-[100px] -z-10" />
              <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#0a2540]/5 rounded-full blur-[60px] sm:blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Refactored for Responsiveness */}
      <section className="py-12 sm:py-16 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Logos Block */}
            <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-auto">
              <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#475569] text-center lg:text-left">
                Our CPAs and Accountants have worked with:
              </p>
              <div className="flex items-end justify-center lg:justify-start gap-8 sm:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" 
                  alt="EY" 
                  className="h-10 sm:h-12 lg:h-14 w-auto" 
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg" 
                  alt="Deloitte" 
                  className="h-5 sm:h-7 lg:h-9 w-auto transform translate-y-0.5 sm:translate-y-1" 
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/db/KPMG_blue_logo.svg" 
                  alt="KPMG" 
                  className="h-7 sm:h-8 lg:h-10 w-auto" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Stats Block - Vertical sequence on mobile, horizontal on tablet/desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-10 sm:gap-0 w-full lg:w-auto lg:ml-auto">
              <div className="flex flex-col items-center shrink-0 lg:border-l border-slate-200 dark:border-slate-800 px-8 sm:px-10 lg:px-12 xl:px-16 h-14 justify-center">
                <span className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#0a2540] dark:text-white tracking-tight leading-none">1200+</span>
                <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#475569] mt-2 text-center leading-tight max-w-[100px]">Successful Deliverables</p>
              </div>

              <div className="flex flex-col items-center shrink-0 sm:border-l border-slate-200 dark:border-slate-800 px-8 sm:px-10 lg:px-12 xl:px-16 h-14 justify-center">
                <span className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#0a2540] dark:text-white tracking-tight leading-none">24/7</span>
                <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#475569] mt-2 text-center leading-tight max-w-[120px]">Enterprise-Grade Security</p>
              </div>

              <div className="flex flex-col items-center shrink-0 sm:border-l border-slate-200 dark:border-slate-800 px-8 sm:px-10 lg:px-12 xl:px-16 h-14 justify-center">
                <span className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#0a2540] dark:text-white tracking-tight leading-none">25+</span>
                <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#475569] mt-2 text-center leading-tight max-w-[120px]">Years Combined Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section - Based on Reference */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 sm:mb-8 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border-[#3b82f6]/30 text-[#3b82f6] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-[#3b82f6]/5">
              Capacity Challenges
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-[#0a2540] dark:text-white mb-6 sm:mb-10 leading-[1.2] lg:leading-[1.1] tracking-tight">
              Stop spending months chasing & training hires. <span className="text-[#3b82f6]">No more costly turnover cycles.</span> Reduce staffing overhead.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#475569] dark:text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium mb-10 sm:mb-12">
              Our white-label bookkeeping, payroll, and reporting team gives your firm the capacity to scale without the hassle and chaos of building a bigger in-house team.
            </p>
            <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} size="lg" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-[#0a2540] hover:bg-[#3b82f6] text-white transition-all duration-300 shadow-xl">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <CostSavingsCalculator />

      {/* Expertise & Value Props Section - Redesigned Alternating Layout */}
      <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <Badge className="mb-4 sm:mb-6 bg-[#3b82f6]/10 text-[#3b82f6] border-none px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">Expertise</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0a2540] dark:text-white leading-tight">Built by CPAs and Accounting Professionals</h2>
            <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 font-medium">Experience shaped in high-performance accounting environments, delivered with precision and security.</p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {/* Value Prop 1: Image Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white dark:border-slate-800 aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                    alt="Professional Team Collaboration" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/30 to-transparent" />
                </div>
                {/* Floating Widget - Hide on smallest mobile to prevent overlap */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden sm:block absolute -top-8 -right-8 glass p-6 rounded-3xl shadow-xl max-w-[240px] z-20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6]">
                      <Users size={20} />
                    </div>
                    <span className="text-sm font-bold text-[#0a2540]">Active Capacity</span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">Your team expanded by 4 expert bookkeepers today.</p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <span className="text-[#3b82f6] font-bold text-[11px] sm:text-sm uppercase tracking-widest mb-4 block">Scale Effortlessly</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#0a2540] dark:text-white leading-tight">More Capacity, No Hiring Required</h3>
                <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 mb-8 leading-relaxed font-medium">
                  Expand your firm’s ability to serve more clients without spending months recruiting, interviewing, and onboarding. Our white-label team plugs into your workflow fast, giving you the freedom to focus on high-level strategy.
                </p>
                <a href="#how-it-works" className="block sm:inline-block">
                  <Button className="w-full sm:w-auto rounded-full bg-[#0a2540] hover:bg-[#3b82f6] text-white transition-all px-10 h-14 font-bold shadow-lg">
                    How It Works
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Value Prop 2: Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 text-center lg:text-left"
              >
                <span className="text-[#3b82f6] font-bold text-[11px] sm:text-sm uppercase tracking-widest mb-4 block">Efficiency First</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#0a2540] dark:text-white leading-tight">Lower Overhead, Less Chaos</h3>
                <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 mb-8 leading-relaxed font-medium">
                  Avoid the full cost of in-house hiring — including salaries, benefits, taxes, and turnover. Get flexible accounting capacity without the stress of building a bigger internal team. We handle the management, you reap the rewards.
                </p>
                <a href="#calculator" className="block sm:inline-block">
                  <Button className="w-full sm:w-auto rounded-full bg-[#0a2540] hover:bg-[#3b82f6] text-white transition-all px-10 h-14 font-bold shadow-lg">
                    Calculate Savings
                  </Button>
                </a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2"
              >
                <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white dark:border-slate-800 aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                    alt="Efficient Workflow" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/30 to-transparent" />
                </div>
                {/* Floating Widget */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="hidden sm:block absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-xl max-w-[240px] z-20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <span className="text-sm font-bold text-[#0a2540]">Cost Reduction</span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">Reduced staffing overhead by 45% for partner firms.</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Value Prop 3: Image Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white dark:border-slate-800 aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" 
                    alt="Professional Support" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/30 to-transparent" />
                </div>
                {/* Floating Widget - Hide on smallest mobile */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-8 glass p-6 rounded-3xl shadow-xl max-w-[240px] z-20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#0a2540]/10 flex items-center justify-center text-[#0a2540]">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-sm font-bold text-[#0a2540]">Secure Delivery</span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">Bank-grade security protocols applied to all deliverables.</p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <span className="text-[#3b82f6] font-bold text-[11px] sm:text-sm uppercase tracking-widest mb-4 block">Your Brand, Our Experts</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#0a2540] dark:text-white leading-tight">Expert Support Behind Your Brand</h3>
                <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 mb-8 leading-relaxed font-medium">
                  Work with a team of CPAs and bookkeepers with experience from major firms. We operate behind the scenes under your brand, helping you maintain consistency and quality without the need for micromanagement.
                </p>
                <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} className="w-full sm:w-auto rounded-full bg-[#0a2540] hover:bg-[#3b82f6] text-white transition-all px-10 h-14 font-bold shadow-lg">
                  Book A Call
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-[#3b82f6]/10 text-[#3b82f6] border-none">Our Services</Badge>
              <h2 className="text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">Comprehensive Support for Your Firm</h2>
              <p className="text-[#475569] dark:text-slate-400">We handle the recurring back-office work so you can focus on high-value advisory.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Reconciliations", desc: "Daily, weekly, or monthly bank and credit card reconciliations.", icon: CheckCircle2 },
              { title: "Accounts Payable", desc: "Vendor management, bill entry, and payment scheduling.", icon: CreditCard },
              { title: "Accounts Receivable", desc: "Invoicing, collections, and revenue tracking.", icon: FileText },
              { title: "Payroll Processing", desc: "Full-service payroll management and compliance.", icon: Users },
              { title: "Financial Reporting", desc: "P&L, Balance Sheet, and custom management reports.", icon: TrendingUp },
              { title: "Clean-up Projects", desc: "Historical data correction and system optimization.", icon: Clock }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/5 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#0a2540] dark:text-white">{service.title}</h4>
                <p className="text-sm text-[#475569] dark:text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-[#0a2540] text-white overflow-hidden relative font-sans">
        <div className="absolute inset-0 opacity-5 bg-grid-slate-200" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b82f6] text-white text-[11px] font-bold uppercase tracking-wider mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              How It Works
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-[1.05] tracking-tight">
              From Needs to Capacity <br /> in <span className="text-[#3b82f6]">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              No learning curve. No complicated setup. Just professional white-label capacity when you need it most.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20 text-sans">
            {[
              { 
                step: "01",
                title: "Onboard Your Firm", 
                desc: "We align with your workflow, systems, deadlines, and service standards to build a smooth white-label process around your firm.",
                checkText: "Seamless integration into your tech stack",
                mockup: (
                  <div className="w-full h-full p-6 flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#3b82f6]/5 flex items-center justify-center text-[#3b82f6]">
                        <Settings size={18} />
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Onboarding</div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-[10px] font-bold text-[#0a2540]">QBO / Xero Sync</span>
                        </div>
                        <Check size={12} className="text-emerald-500" />
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between opacity-60">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <span className="text-[10px] font-bold text-[#0a2540]">SOP Alignment</span>
                        </div>
                        <div className="w-8 h-1 px-1 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#3b82f6] w-2/3" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              { 
                step: "02",
                title: "Submit Information, Tasks & Timelines", 
                desc: "You send the required client information, deliverables, and deadlines through an agreed workflow, and our team gets to work behind the scenes.",
                checkText: "Flexible submission via email or portal",
                mockup: (
                  <div className="w-full h-full p-6 flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#3b82f6]/5 flex items-center justify-center text-[#3b82f6]">
                        <Send size={18} />
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Submissions</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0a2540] text-white space-y-3 shadow-lg">
                      <div className="flex justify-between items-center text-[9px] font-bold">
                        <span>Monthly Close - Client A</span>
                        <span className="text-[#3b82f6]">Due in 48h</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#3b82f6] w-full animate-pulse" />
                      </div>
                      <div className="flex gap-1.5">
                        <div className="px-2 py-1 bg-white/5 rounded text-[8px] border border-white/10">8 Invoices</div>
                        <div className="px-2 py-1 bg-white/5 rounded text-[8px] border border-white/10">P&L Data</div>
                      </div>
                    </div>
                  </div>
                )
              },
              { 
                step: "03",
                title: "Receive Deliverables & Ongoing Support", 
                desc: "We return completed work on schedule, communicate in real time when needed, and help your firm maintain reliable service capacity month after month.",
                checkText: "Reliable white-label delivery",
                mockup: (
                  <div className="w-full h-full p-6 flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">Delivered</div>
                      <Badge variant="outline" className="text-[8px] h-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Recurring</Badge>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-[#0a2540]">
                        <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        Financial Pack Ready
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-[#0a2540] opacity-50">
                        <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                          <MessageSquare size={12} />
                        </div>
                        Manager Online
                      </div>
                    </div>
                    <div className="mt-auto h-10 rounded-lg bg-[#0a2540] text-white flex items-center justify-center gap-2 text-[10px] font-bold cursor-pointer hover:bg-[#3b82f6] transition-colors">
                      <Download size={14} />
                      Review Deliverables
                    </div>
                  </div>
                )
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-10 border border-white/10 flex flex-col group h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold text-lg mb-8 shadow-xl group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white leading-tight">{item.title}</h3>
                <p className="text-white/60 leading-relaxed mb-8 text-[15px]">{item.desc}</p>
                
                <div className="mt-auto bg-white rounded-[2rem] aspect-[1.4/1] mb-8 p-3 shadow-inner border border-white/10">
                  {item.mockup}
                </div>

                <div className="flex items-center gap-3 text-sm text-white font-bold tracking-tight">
                  <CheckCircle2 size={16} className="text-[#3b82f6]" />
                  {item.checkText}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto"
          >
            <div className="text-center lg:text-left max-w-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-3">Ready to scale your firm?</h3>
              <p className="text-lg text-[#475569]">Book a call today and get your first dedicated accounting pod launched in under 7 days.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
               <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} size="lg" className="rounded-2xl px-10 h-16 bg-[#0a2540] hover:bg-[#3b82f6] text-white font-bold transition-all shadow-xl group flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar size={18} />
                </div>
                Book a Free Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <Badge className="mb-4 bg-[#3b82f6]/10 text-[#3b82f6] border-none px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest leading-none">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0a2540] dark:text-white leading-tight">Flexible Capacity for Every Firm</h2>
            <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 font-medium">Choose the model that best fits your current volume and growth goals.</p>
          </div>

          <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto">
            {/* Plan 1: Dedicated Capacity Pod */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 items-stretch">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden"
              >
                <div className="relative z-10 mb-20 sm:mb-0">
                  <span className="text-[#475569] text-xl sm:text-2xl font-light mb-2 block">Expand Horizons</span>
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#0a2540] dark:text-white mb-6 leading-tight">With Dedicated Monthly Plan</h4>
                  <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 max-w-md leading-relaxed">
                    Built for firms that need reliable back-end accounting support for up to 12 active client accounts — without the cost, delays, and headaches of hiring in-house.
                  </p>
                  <div className="hidden sm:block mt-8 text-[#0a2540] dark:text-white w-8 h-8">
                    <ArrowRight className="w-full h-full" />
                  </div>
                </div>
                <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-64 sm:w-80 h-64 sm:h-80">
                   <div className="w-full h-full rounded-full bg-gradient-to-br from-[#3b82f6] to-[#0a2540] shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
                   </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative glass rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 overflow-hidden flex flex-col border-slate-200 dark:border-slate-800 shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6]/20 rounded-full blur-[60px] -mr-20 -mt-20" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] dark:text-white mb-6">Dedicated Monthly Plan</h3>
                <div className="flex items-baseline gap-2 mb-8 sm:mb-10">
                  <span className="text-5xl sm:text-6xl font-bold text-[#0a2540] dark:text-white">$4,499</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">per month</span>
                    <span className="text-[10px] text-[#475569]">billed monthly</span>
                  </div>
                </div>
                <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} className="w-full rounded-2xl h-16 text-lg font-bold bg-[#0a2540] hover:bg-[#3b82f6] text-white transition-all mb-10 shadow-lg">
                  Add Capacity
                </Button>
                <ul className="space-y-4 mb-8">
                  {[
                    "Support for up to 12 active client accounts",
                    "Full-service bookkeeping & payroll",
                    "CPAs with Big 4 background",
                    "7-day rapid onboarding",
                    "Seamless PMS & QBO/Xero sync",
                    "Enterprise-grade security",
                    "Daily communication loops"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#475569] dark:text-slate-300">
                      <CheckCircle2 size={18} className="text-[#3b82f6] shrink-0 mt-0.5" />
                      <span className="font-medium">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-5 bg-[#3b82f6]/5 dark:bg-[#3b82f6]/10 rounded-2xl border border-[#3b82f6]/20 shadow-sm relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={18} className="text-[#3b82f6]" />
                      <span className="font-bold text-[#0a2540] dark:text-white text-[13px] sm:text-sm">30-Day Delivery Guarantee</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#475569] dark:text-slate-300 relative z-10 font-medium">
                      If agreed deliverables aren't completed in 30 days, we work free or refund your first month.
                    </p>
                  </div>
                </div>

                <p className="mt-auto text-[11px] text-[#475569] font-bold uppercase tracking-wider text-center">Need a custom package?</p>
              </motion.div>
            </div>

            {/* Plan 2: Per-Client Managed */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8 items-stretch pt-12 sm:pt-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative glass rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 overflow-hidden flex flex-col border-slate-200 dark:border-slate-800 shadow-2xl order-2 lg:order-1"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6]/10 rounded-full blur-[60px] -mr-20 -mt-20" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] dark:text-white mb-6">Managed Plan</h3>
                <div className="flex items-baseline gap-2 mb-8 sm:mb-10">
                  <span className="text-5xl sm:text-6xl font-bold text-[#0a2540] dark:text-white">$959</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">base / month</span>
                    <span className="text-[10px] text-[#475569]">plus per-client fees</span>
                  </div>
                </div>
                <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} className="w-full rounded-2xl h-16 text-lg font-bold bg-[#0a2540] hover:bg-[#3b82f6] text-white transition-all mb-10 shadow-lg">
                  Start Scaling
                </Button>
                <ul className="space-y-4 mb-8">
                  {[
                    "Base fee + per-client account pricing",
                    "Full-service bookkeeping & payroll",
                    "CPAs with Big 4 background",
                    "7-day rapid onboarding",
                    "Seamless PMS & systems sync",
                    "Enterprise-grade security",
                    "Rapid communication loops"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#475569] dark:text-slate-300">
                      <CheckCircle2 size={18} className="text-[#3b82f6] shrink-0 mt-0.5" />
                      <span className="font-medium">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-5 bg-[#3b82f6]/5 dark:bg-[#3b82f6]/10 rounded-2xl border border-[#3b82f6]/20 shadow-sm relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={18} className="text-[#3b82f6]" />
                      <span className="font-bold text-[#0a2540] dark:text-white text-[13px] sm:text-sm">30-Day Delivery Guarantee</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#475569] dark:text-slate-300 relative z-10 font-medium">
                      If agreed deliverables aren't completed in 30 days, we work free or refund your first month.
                    </p>
                  </div>
                </div>

                <p className="mt-auto text-[11px] text-[#475569] font-bold uppercase tracking-wider text-center">Need a custom package?</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden order-1 lg:order-2"
              >
                <div className="relative z-10 mb-20 sm:mb-0">
                  <span className="text-[#475569] text-xl sm:text-2xl font-light mb-2 block">Flexible Growth</span>
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#0a2540] dark:text-white mb-6 leading-tight">With Managed Plan</h4>
                  <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 max-w-md leading-relaxed">
                    Perfect for firms that need flexible back-end accounting support as they scale. Pay for a reliable base of operations and only add client-specific capacity when you need it.
                  </p>
                  <div className="hidden sm:block mt-8 text-[#0a2540] dark:text-white w-8 h-8">
                    <ArrowRight className="w-full h-full" />
                  </div>
                </div>
                <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-64 sm:w-80 h-64 sm:h-80">
                   <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#0a2540] to-[#3b82f6] shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent)]" />
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Based on Reference */}
      <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Concentric Rings Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] pointer-events-none opacity-5 dark:opacity-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className="absolute inset-0 rounded-full border border-[#0a2540] dark:border-white"
              style={{ transform: `scale(${i * 0.2})` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#3b82f6] font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.4em] mb-4 sm:mb-6 block">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0a2540] dark:text-white leading-tight">
              Firms choose us because we deliver the best for their clients
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto mb-16 sm:mb-24">
            {[
              { title: "Dedicated project manager", desc: "With a single point of contact, you can easily scale without the communication overhead.", icon: UserCheck, color: "bg-orange-100 text-orange-600" },
              { title: "Organized tasks", desc: "Our structured workflows ensure every deliverable is tracked and completed on schedule.", icon: LayoutGrid, color: "bg-rose-100 text-rose-600" },
              { title: "Easy feedback sharing", desc: "Collaborate seamlessly with our team through integrated feedback loops and reporting.", icon: MessageSquare, color: "bg-emerald-100 text-emerald-600" },
              { title: "Never miss deadline", desc: "We prioritize your firm's reliability, ensuring every client report is delivered on time.", icon: Calendar, color: "bg-slate-100 text-slate-600" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left items-center sm:items-start"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-sm mb-2 sm:mb-0`}>
                  <item.icon size={24} className="sm:size-28" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0a2540] dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#475569] dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-16 sm:mb-24">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-[#0a2540] hover:bg-[#3b82f6] text-white transition-all shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
              See How It Works
            </Button>
          </div>

          {/* Tilted Image Gallery - Responsive adjustments */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 sm:gap-6 overflow-hidden py-10 px-4 sm:px-0">
            {[
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: 5, y: 20 }}
                whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${i > 1 ? 'hidden sm:block' : 'block'} w-full sm:w-72 lg:w-80 h-48 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 shrink-0 transform hover:scale-105 transition-transform duration-500`}
                style={{ transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)` }}
              >
                <img src={img} alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 sm:py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 sm:gap-20 items-start">
            <div className="max-w-md text-center lg:text-left mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 sm:mb-8 text-[#0a2540] dark:text-white leading-tight">LedgerFarm FAQs</h2>
              <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed font-medium">
                As a specialized white-label partner, we are dedicated to delivering reliable capacity in exactly 7 days and providing a transparent, risk-free onboarding process.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} variant="outline" className="w-full sm:w-auto rounded-full px-8 h-12 border-[#0a2540] text-[#0a2540] font-bold hover:bg-[#0a2540] hover:text-white transition-all">
                  More Questions
                </Button>
                <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} variant="ghost" className="w-full sm:w-auto text-[#0a2540] font-bold hover:bg-transparent hover:text-[#3b82f6]">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-8 lg:pt-0">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "What exactly do you handle?", a: "We provide white-label support for the bookkeeping, payroll, and financial reporting portions of your workflow, helping your firm complete recurring back-office accounting work behind the scenes under your brand." },
                  { q: "Who is this service for?", a: "This service is for accounting firm owners who want to increase service capacity without the time, cost, and stress of hiring, training, and retaining more in-house accounting staff." },
                  { q: "How is this different from hiring internally?", a: "Instead of spending months sourcing candidates, interviewing, onboarding, and managing staff, you get access to an experienced white-label accounting team that plugs into your workflow and supports your firm on an ongoing basis." },
                  { q: "Will my clients know I’m using an outsourced team?", a: "No. We work as a white-label support partner behind the scenes, so your firm stays front-facing while we handle the assigned bookkeeping, payroll, and reporting deliverables in the background." },
                  { q: "How do you maintain quality?", a: "Our team includes CPAs, accountants, and bookkeepers with strong accounting experience. We follow structured workflows, agreed deliverable requirements, and clear turnaround expectations to maintain consistency and quality." },
                  { q: "How does onboarding work?", a: "We start with a detailed onboarding process to understand your workflow, systems, deadlines, and service standards. From there, we align on responsibilities, communication, and deliverable expectations so the transition is smooth and organized." },
                  { q: "Why should we trust your team?", a: "Our team includes experienced CPAs, accountants, and bookkeepers with backgrounds shaped by major accounting firms such as EY, Deloitte, and other strong accounting environments, giving your firm access to professional support without adding internal headcount." },
                  { q: "What tech stack do you use?", a: "We are experts in QuickBooks Online, Xero, and major payroll platforms. We adapt to the systems your firm already uses." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100 dark:border-slate-800">
                    <AccordionTrigger className="text-left font-bold text-lg sm:text-xl text-[#0a2540] dark:text-white hover:no-underline py-6 sm:py-8 group">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base sm:text-lg text-[#475569] dark:text-slate-400 leading-relaxed pb-6 sm:pb-8">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Closer Section - Dark Banner Style */}
      <section className="py-12 sm:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0a2540] rounded-[2rem] sm:rounded-[2.5rem] p-10 sm:p-20 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 text-center md:text-left"
          >
            {/* Light Beam Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-bold text-white relative z-10 max-w-xl">
              Ready to work <span className="text-[#3b82f6]">with us?</span>
            </h2>

            <Button onClick={() => window.open("https://calendly.com/team-theledgerfarm/30min", "_blank")} size="lg" className="w-full sm:w-auto rounded-full px-10 h-16 text-lg font-bold bg-white text-[#0a2540] hover:bg-[#3b82f6] hover:text-white transition-all duration-300 shadow-xl relative z-10 group">
              Book a Free Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-20 border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="sm:col-span-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
                <Logo />
              </div>
              <p className="text-muted-foreground max-w-sm mb-8 mx-auto sm:mx-0">
                Built for firms that need more capacity now — not months from now. Expert white-label accounting support behind your brand.
              </p>
              <div className="flex justify-center sm:justify-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition-colors cursor-pointer">
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-6 text-[#0a2540] dark:text-white uppercase tracking-widest text-[11px]">Navigation</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#services" className="hover:text-[#3b82f6] transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-[#3b82f6] transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-[#3b82f6] transition-colors">Pricing</a></li>
                <li><a href="#faqs" className="hover:text-[#3b82f6] transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-6 text-[#0a2540] dark:text-white uppercase tracking-widest text-[11px]">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="mailto:team@ledgerfarm.com" className="hover:text-[#3b82f6] transition-colors">team@ledgerfarm.com</a></li>
                <li><a href="tel:+17349340488" className="hover:text-[#3b82f6] transition-colors">+1 734 934 0488</a></li>
                <li>Dearborn, Michigan</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-800 text-[10px] sm:text-xs text-slate-400 font-bold tracking-wider uppercase">
            <span>© 2026 LedgerFarm. All rights reserved.</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#3b82f6] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#3b82f6] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cursor proximity effect (subtle glow) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(15, 23, 42, 0.05), transparent 80%)`,
        }}
      />
    </div>
  );
}
