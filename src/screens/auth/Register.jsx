import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  Hash,
  ArrowRight,
  Eye,
  EyeOff,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { MainContent } from "../../constants/MainContent";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F7F4] flex items-center justify-center py-12 px-4 selection:bg-[#9DB29B] selection:text-white">
      <div className="max-w-6xl w-full grid lg:grid-cols-12 bg-white rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-white overflow-hidden">
        <div className="lg:col-span-5 relative bg-[#3D4F45] p-12 overflow-hidden hidden lg:flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 border-[40px] border-white rounded-full" />
            <div className="absolute bottom-[20%] left-[-10%] w-32 h-32 border-[20px] border-[#9DB29B] rounded-full" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-white mb-12">
              <img src={MainContent.appLogo} className="w-14" alt="" />
              <span className="text-xl font-bold tracking-tighter uppercase">
                {MainContent.appName}
              </span>
            </div>
            <h2 className="text-5xl font-serif text-white leading-tight mb-6">
              The ritual <br />
              <span className="italic font-light text-[#9DB29B]">
                begins here.
              </span>
            </h2>
            <p className="text-gray-300 font-light leading-relaxed max-w-xs">
              Join a community where ancient heritage meets modern botanical
              excellence.
            </p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#9DB29B] rounded-full flex items-center justify-center text-white">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                  Invited by
                </p>
                <p className="text-sm font-bold text-white uppercase tracking-tight">
                  Verified Sponsor Network
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#9DB29B]" />
              <p className="text-[10px] text-white/80 italic font-light">
                Exclusive membership via referral only.
              </p>
            </div>
          </motion.div>

          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
            className="absolute bottom-0 right-0 w-full h-2/3 object-cover opacity-30 mix-blend-overlay"
            alt="Nature Background"
          />
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="lg:col-span-7 p-10 md:p-16 lg:p-20">
          <div className="mb-10">
            <h3 className="text-3xl font-serif text-[#1A1A1A] mb-2">
              Create Account
            </h3>
            <div className="h-1 w-12 bg-[#9DB29B] rounded-full" />
          </div>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              {/* NAME */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User
                    size={18}
                    className="absolute left-4 text-gray-300 transition-colors group-focus-within:text-[#9DB29B] z-10"
                  />
                  <input
                    type="text"
                    className="w-full bg-[#F9FAF9] border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm focus:bg-white focus:ring-1 focus:ring-[#9DB29B] outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* MOBILE */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                  Mobile Number
                </label>
                <div className="relative flex items-center">
                  <Phone
                    size={18}
                    className="absolute left-4 text-gray-300 z-10"
                  />
                  <input
                    type="tel"
                    className="w-full bg-[#F9FAF9] border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm focus:bg-white focus:ring-1 focus:ring-[#9DB29B] outline-none transition-all"
                    placeholder="+91 0000 0000"
                  />
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail
                  size={18}
                  className="absolute left-4 text-gray-300 z-10"
                />
                <input
                  type="email"
                  className="w-full bg-[#F9FAF9] border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm focus:bg-white focus:ring-1 focus:ring-[#9DB29B] outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* SPONSOR ID */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#9DB29B] ml-2">
                Sponsor Identity
              </label>
              <div className="relative flex items-center">
                <Hash
                  size={18}
                  className="absolute left-4 text-[#9DB29B] z-10"
                />
                <input
                  type="text"
                  className="w-full bg-[#F1F4F1] border border-transparent rounded-2xl py-4 pl-12 pr-24 text-sm focus:bg-white focus:border-[#9DB29B]/30 outline-none transition-all font-mono tracking-widest placeholder:font-sans placeholder:tracking-normal"
                  placeholder="E.g. BGS-9920"
                />
                <button
                  type="button"
                  className="absolute right-3 bg-white px-3 py-1.5 rounded-xl text-[9px] font-bold text-gray-400 shadow-sm hover:text-[#9DB29B] transition-colors uppercase"
                >
                  Validate
                </button>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock
                  size={18}
                  className="absolute left-4 text-gray-300 z-10"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-[#F9FAF9] border border-gray-100 rounded-2xl py-4 pl-12 pr-12 text-sm focus:bg-white focus:ring-1 focus:ring-[#9DB29B] outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-300 hover:text-[#9DB29B] z-10"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="agree"
                className="w-5 h-5 accent-[#9DB29B] rounded cursor-pointer"
              />
              <label
                htmlFor="agree"
                className="text-[11px] text-gray-400 font-medium"
              >
                I agree to the {MainContent.appName}{" "}
                <span className="text-[#333] font-bold">Terms</span> and{" "}
                <span className="text-[#333] font-bold">Privacy Policy</span>.
              </label>
            </div>

            {/* SUBMIT */}
            <div className="pt-6">
              <button className="w-fit bg-[#1A1A1A] text-white py-4 px-8 mx-auto rounded-full font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-black/20 hover:bg-[#9DB29B] hover:shadow-[#9DB29B]/40 transition-all flex items-center justify-center gap-3 group">
                Register Now{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 pt-6">
              Already have an account?
              <Link
                to="/login"
                className="text-[#1A1A1A] font-bold ml-1 hover:text-[#9DB29B] transition-colors"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
