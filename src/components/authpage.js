import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Camera, MapPin, MessageSquare, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'asdf@gmail.com' && password === 'asdf') {
      navigate('/home');
    }
  };

  const FeatureIcon = ({ Icon }) => (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600">
      <Icon size={24} />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Branding */}
      <div className="w-full md:w-1/2 bg-teal-900 text-white p-8 flex flex-col justify-between">
        <div>
          <div className="text-3xl font-bold mb-4">City Watch</div>
          <h1 className="text-4xl font-bold mb-8">Your Voice. Your City. Your Impact.</h1>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="flex items-center space-x-4">
              <FeatureIcon Icon={Camera} />
              <span>Report Issues</span>
            </div>
            <div className="flex items-center space-x-4">
              <FeatureIcon Icon={MapPin} />
              <span>Location Tracking</span>
            </div>
            <div className="flex items-center space-x-4">
              <FeatureIcon Icon={MessageSquare} />
              <span>Community Discussion</span>
            </div>
            <div className="flex items-center space-x-4">
              <FeatureIcon Icon={ThumbsUp} />
              <span>Track Progress</span>
            </div>
          </div>
        </div>

        <img 
          src="/api/placeholder/600/400"
          alt="City Watch Features"
          className="rounded-lg mt-8"
        />
      </div>

      {/* Right Section - Auth Forms */}
      <div className="w-full md:w-1/2 p-8 bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <div className="w-full">
            <div className="grid w-full grid-cols-2 mb-8 border rounded-lg overflow-hidden">
              <button 
                className={`py-2 ${activeTab === 'login' ? 'bg-teal-600 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`py-2 ${activeTab === 'signup' ? 'bg-teal-600 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </div>

            {activeTab === 'login' && (
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <button type="submit" className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg">
                  Login
                </button>

                <div className="text-center">
                  <a href="#" className="text-sm text-teal-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </form>
            )}

            {activeTab === 'signup' && (
              <form className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg">
                  Sign Up
                </button>
              </form>
            )}

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="w-full py-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center">
                  <img
                    src="/api/placeholder/20/20"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Google
                </button>
                <button className="w-full py-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center">
                  <img
                    src="/api/placeholder/20/20"
                    alt="Facebook"
                    className="w-5 h-5 mr-2"
                  />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full bg-white p-4 text-center md:hidden border-t">
        <div className="flex justify-center space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:text-teal-600">Privacy Policy</a>
          <a href="#" className="hover:text-teal-600">Terms</a>
          <a href="#" className="hover:text-teal-600">About</a>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;