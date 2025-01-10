"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactUsModule({ links }: any) {
  const [status, setstatus] = useState<boolean>()

  const handelFormSubmit = async(e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const rawResponse = await fetch(`/api/send-mail`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const email = await rawResponse.json();
    console.log("🚀 ~ handelFormSubmit ~ email:", email)
    if (email.status === "ok") {
      setstatus(true);
      form.reset();
    }
  };

  return (
    <main className="pt-24 pb-16 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with our team for personalized transportation solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card lg:col-span-1 h-fit"
          >
            <h2 className="text-xl font-semibold mb-6 gradient-text">
              Contact Information
            </h2>
            <div className="space-y-4">
              {links?.right_nav?.map((item: any, idx: number) => (
                <div key={idx} className="flex items-center space-x-3">
                  <Image
                    src={urlFor(item.icon?.asset?._ref)?.url()}
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="text-gray-300">
                    <Link href={item?.link || "#"}>{item.label}</Link>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card lg:col-span-2"
          >
            <form className="space-y-6" onSubmit={(e) => handelFormSubmit(e)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-300"
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-300"
                  >
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-300"
                  >
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="smsOptIn"
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-700 bg-gray-800/50 text-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="smsOptIn" className="text-sm text-gray-300">
                    I agree to receive SMS/text messages from BKE Logistics LLC.
                    Message and data rates may apply. Message frequency varies.
                    Reply HELP for help or STOP to cancel at any time.
                  </label>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-medium  bg-blue-600/90 hover:bg-blue-700/90 text-white border-blue-500/50 hover:border-blue-400/50"
                >
                  Send Message
                </button>
              </div>
              {status && <p className="text-center mt-2">Email Sended Successfully!</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
