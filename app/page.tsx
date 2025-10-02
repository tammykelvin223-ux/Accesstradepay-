import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Clock, Users, DollarSign, BarChart3, Smartphone, Award, CheckCircle } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const stats = [
    { value: '400K+', label: 'Users Trust Us' },
    { value: '24/7', label: 'Customer Support' },
    { value: '800K+', label: 'Transactions' }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: 'Trading',
      description: 'Access real-time market data, advanced trading tools, and customized alerts.',
      number: '01.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-400" />,
      title: 'Staking',
      description: 'Earn competitive staking rewards with our flexible and secure staking options.',
      number: '02.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Investing',
      description: 'Diversify your portfolio with our expertly managed investment plans.',
      number: '03.'
    }
  ];

  const benefits = [
    'Low transaction fees and high liquidity markets',
    '24/7 support from experienced trading professionals',
    'Top-tier security for data and transactions'
  ];

  const cryptoLogos = [
    { name: 'IBM', color: 'bg-blue-500' },
    { name: 'TRX', color: 'bg-red-500' },
    { name: 'XRP', color: 'bg-blue-400' },
    { name: 'PayPal', color: 'bg-blue-600' },
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'BNB', color: 'bg-yellow-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TP</span>
          </div>
          <span className="text-xl font-bold">TradePay Global</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Trading</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Staking</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Investing</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Company</a>
        </div>

        <Button 
          onClick={() => navigate('/signup')}
          className="bg-blue-600 hover:bg-blue-700 px-6"
        >
          Get Started
        </Button>
      </nav>

      {/* Price Ticker */}
      <div className="bg-gray-800/50 px-6 py-2 border-b border-gray-700/50">
        <div className="flex items-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">BTC</span>
            <span className="text-white">$48,530</span>
            <span className="text-green-400">+8.30 (+0.13%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">ETH</span>
            <span className="text-white">$3,245</span>
            <span className="text-green-400">+113.40 (+0.05%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">EUR to USD</span>
            <span className="text-white">1.16726</span>
            <span className="text-green-400">+0.00 (+0.11%)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative px-6 py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-sm text-blue-400 font-medium">
              Trading, Crypto, Staking & Investing
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Empower Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Financial
              </span>{' '}
              Future with Cryptocurrency and Forex Trading
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Experience seamless cryptocurrency and forex trading, high-yield staking, and 
              secure investment opportunities with cutting-edge tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/signup')}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mobile App Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden">
                {/* Phone Header */}
                <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                  <span className="text-white text-sm font-medium">12:08</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-6">
                  {/* Balance Card */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4">
                    <div className="text-white text-sm opacity-80">Total Balance</div>
                    <div className="text-white text-2xl font-bold">$12,847.50</div>
                    <div className="text-green-300 text-sm">+2.5% today</div>
                  </div>

                  {/* Packages */}
                  <div>
                    <div className="text-white text-lg font-semibold mb-4">PACKAGES</div>
                    
                    {/* Bronze Package */}
                    <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl p-4 mb-3">
                      <div className="text-white font-bold">BRONZE</div>
                      <div className="text-white text-sm opacity-90">Minimum Deposit: $1,000</div>
                      <div className="text-white text-sm opacity-90">Maximum Deposit: $4,999</div>
                      <div className="text-white text-sm opacity-90">Expected Returns: 15%</div>
                      <div className="text-white text-sm opacity-90">Duration: One Week</div>
                      <div className="text-white text-sm opacity-90">Referral Bonus: 5%</div>
                      <Button className="bg-white/20 hover:bg-white/30 text-white mt-2 w-full">
                        Invest Now
                      </Button>
                    </div>

                    {/* Silver Package */}
                    <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl p-4">
                      <div className="text-white font-bold">SILVER</div>
                      <div className="text-white text-sm opacity-90">Higher returns available</div>
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-50">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polyline
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                      points="0,80 20,60 40,70 60,40 80,50 100,20"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Logos */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {cryptoLogos.map((logo, index) => (
              <div key={index} className={`w-12 h-12 ${logo.color} rounded-full flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{logo.name.slice(0, 3)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Explore the advanced features that make us the best choice for 
            cryptocurrency and forex traders, investors, and stakers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="text-gray-400 text-sm font-medium mb-2">{feature.number}</div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Overview Section */}
      <div className="px-6 py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Mockup */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-4">
                <button className="text-blue-400 border-b-2 border-blue-400 pb-2">Indices</button>
                <button className="text-gray-400 pb-2">Futures</button>
                <button className="text-gray-400 pb-2">Bonds</button>
                <button className="text-gray-400 pb-2">Forex</button>
              </div>
            </div>
            
            <div className="h-64 relative">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <polyline
                  fill="url(#chartGradient)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="0,150 50,120 100,140 150,80 200,100 250,60 300,80 350,40 400,50"
                />
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="0,150 50,120 100,140 150,80 200,100 250,60 300,80 350,40 400,50"
                />
              </svg>
              
              <div className="absolute bottom-4 right-4 bg-gray-900 rounded-lg p-3">
                <div className="text-white text-lg font-bold">6,614.9</div>
                <div className="text-green-400 text-sm">+8.20 (+0.12%)</div>
              </div>
            </div>
          </div>

          {/* Market Data Content */}
          <div className="space-y-6">
            <div className="text-blue-400 text-sm font-medium">Market Overview</div>
            <h2 className="text-4xl font-bold text-white">
              Stay Ahead with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Real-Time
              </span>{' '}
              Market Data
            </h2>
            <p className="text-xl text-gray-300">
              Get an overview of the cryptocurrency market with live 
              updates on major coins. Monitor price trends, trading 
              volumes, and market capitalization, all in one place.
            </p>
            
            <div className="flex items-center space-x-2 text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Live price updates for top cryptocurrencies</span>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              View Market Data
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TP</span>
            </div>
            <span className="text-xl font-bold text-white">TradePay Global</span>
          </div>
          <p className="text-gray-400">© 2024 TradePay Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
