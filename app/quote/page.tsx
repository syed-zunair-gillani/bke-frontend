'use client';

import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function Quote() {
  return (
    <main className="pt-24 pb-16 bg-[#0a0c10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Request a Quote</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get a customized quote for your transportation needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <form className="space-y-8">
            {/* Contact Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4 gradient-text">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-300">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="mcDotType" className="block text-sm font-medium text-gray-300">
                    Authority Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="mcDotType"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Type</option>
                    <option value="mc">MC Number</option>
                    <option value="dot">DOT Number</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mcDotNumber" className="block text-sm font-medium text-gray-300">
                    MC/DOT Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="mcDotNumber"
                    required
                    placeholder="Enter your MC or DOT number"
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-300">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-300">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Rest of the form remains unchanged */}
            {/* Load Information Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4 gradient-text">Load Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="trailerType" className="block text-sm font-medium text-gray-300">
                    Trailer Type Requested <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="trailerType"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Trailer Type</option>
                    <option value="flatbed">Flatbed</option>
                    <option value="stepdeck">Step Deck</option>
                    <option value="rgn">RGN</option>
                    <option value="doubledrop">Double Drop</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="commodity" className="block text-sm font-medium text-gray-300">
                    Commodity Being Hauled <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="commodity"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3 text-gray-200">Pickup Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-3">
                    <label htmlFor="pickupAddress" className="block text-sm font-medium text-gray-300">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pickupAddress"
                      required
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="pickupCity" className="block text-sm font-medium text-gray-300">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pickupCity"
                      required
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="pickupState" className="block text-sm font-medium text-gray-300">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pickupState"
                      required
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="pickupZip" className="block text-sm font-medium text-gray-300">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pickupZip"
                      required
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Location */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3 text-gray-200">Delivery Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-3">
                    <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-300">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="deliveryAddress"
                      required
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryCity" className="block text-sm font-medium text-gray-300">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="deliveryCity"
                      required
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryState" className="block text-sm font-medium text-gray-300">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="deliveryState"
                      required
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryZip" className="block text-sm font-medium text-gray-300">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="deliveryZip"
                      required
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Dates and Weight */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-300">
                    Pickup Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-300">
                    Delivery Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-300">
                    Gross Weight (lbs) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="weight"
                    required
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Special Requirements */}
              <div className="mt-6">
                <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-300">
                  Special Requirements
                </label>
                <textarea
                  id="specialNeeds"
                  rows={3}
                  placeholder="Ex: Coil Racks, Tarping, etc."
                  className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>

            {/* SMS Opt-in */}
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
                  I agree to receive SMS/text messages from BKE Logistics LLC. Message and data rates may apply. 
                  Message frequency varies. Reply HELP for help or STOP to cancel at any time.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button className="px-8">Submit Quote Request</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}