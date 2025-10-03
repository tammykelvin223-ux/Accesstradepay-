"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export default function Landing() {
  const router = useRouter();

  const stats = [
    { value: "400K+", label: "Users Trust Us" },
    { value: "24/7", label: "Customer Support" },
    { value: "800K+", label: "Transactions" },
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Trading",
      description:
        "Access real-time market data, advanced trading tools, and customized alerts.",
      number: "01.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-400" />,
      title: "Staking",
      description:
        "Earn competitive staking rewards with our flexible and secure staking options.",
      number: "02.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Investing",
      description:
        "Diversify your portfolio with our expertly managed investment plans.",
      number: "03.",
    },
  ];

  const benefits = [
    "Low transaction fees and high liquidity markets",
    "24/7 support from experienced trading professionals",
    "Top-tier security for data and transactions",
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
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Trading</a>
          <a href="#" className="text-gray-300 hover:text-white">Staking</a>
          <a href="#" className="text-gray-300 hover:text-white">Investing</a>
          <a href="#" className="text-gray-300 hover:text-white">Company</a>
        </div>

        <Button
          onClick={() => router.push("/signup")}
          className="bg-blue-600 hover:bg-blue-700 px-6"
        >
          Get Started
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 py-16">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-sm text-blue-400 font-medium">
              Trading, Crypto, Staking & Investing
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Empower Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Financial
              </span>{" "}
              Future with Cryptocurrency and Forex Trading
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Experience seamless cryptocurrency and forex trading, high-yield
              staking, and secure investment opportunities with cutting-edge
              tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => router.push("/signup")}
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
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Explore the advanced features that make us the best choice for
            cryptocurrency and forex traders, investors, and stakers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="text-gray-400 text-sm font-medium mb-2">
                  {feature.number}
                </div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
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
            <span className="text-xl font-bold">TradePay Global</span>
          </div>
          <p className="text-gray-400">
            © 2024 TradePay Global. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
