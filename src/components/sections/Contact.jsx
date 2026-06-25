import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FiPhoneCall, FiMapPin, FiMap, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        location: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 8000); // Reset success state after 8 seconds
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error dynamically as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading 
            subtitle="Get In Touch"
            title="Ready to Upgrade Your Space?"
            centered={true}
            className="mb-6"
          />
          <p className="text-brand-gray text-lg leading-relaxed">
            Call us today for false ceiling, interior work, wall panelling, electrical work, and renovation services in Kolkata.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <div className="bg-cream rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-charcoal mb-8">Contact Information</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gold shadow-sm shrink-0">
                    <FiPhoneCall className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray font-semibold uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                    <p className="text-xl font-bold text-charcoal">+91 9051512128</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gold shadow-sm shrink-0">
                    <FiMapPin className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray font-semibold uppercase tracking-wider mb-1">Office Address</p>
                    <p className="text-charcoal font-medium text-lg">2/21 Naktala, Flat No. 6,<br/>Kolkata - 700070</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gold shadow-sm shrink-0">
                    <FiMap className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray font-semibold uppercase tracking-wider mb-1">Working Area</p>
                    <p className="text-charcoal font-medium text-lg">Kolkata and nearby areas</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919051512128" className="w-full">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <FiPhoneCall className="text-lg" /> Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919051512128?text=Hello%20Unique%20False%20Ceiling%2C%20I%20want%20a%20quotation." target="_blank" rel="noreferrer" className="w-full">
                  {/* Custom green outline button styling for WhatsApp */}
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-[#25D366]/20">
                    <FaWhatsapp className="text-xl" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quotation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden h-full">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Request a Quotation</h3>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-green-50/50 border border-green-200 rounded-2xl p-10 text-center h-[90%] flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500">
                      <FiCheckCircle className="text-4xl" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-800 mb-3">Request Sent Successfully!</h4>
                    <p className="text-green-700 text-lg leading-relaxed">Thank you for reaching out to us. Our team will review your requirements and contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                          placeholder="Suman Bar"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">{errors.name}</p>}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                          placeholder="+91 99320 59278"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-2">Service Needed *</label>
                      <select 
                        id="service" 
                        name="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl border appearance-none focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all cursor-pointer ${errors.service ? 'border-red-400 bg-red-50 text-red-900' : 'border-gray-200 bg-gray-50 focus:bg-white text-charcoal'} ${!formData.service && !errors.service ? 'text-gray-400' : ''}`}
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="False Ceiling">False Ceiling</option>
                        <option value="Gypsum Ceiling">Gypsum Ceiling</option>
                        <option value="PVC Ceiling">PVC Ceiling</option>
                        <option value="Modular Ceiling">Modular Ceiling</option>
                        <option value="Wall Panelling">Wall Panelling</option>
                        <option value="Electrical Work">Electrical Work</option>
                        <option value="Renovation">Complete Renovation</option>
                      </select>
                      {errors.service && <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">{errors.service}</p>}
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-charcoal mb-2">Location / Area *</label>
                      <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.location ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                        placeholder="e.g. Naktala, Jadavpur, Salt Lake..."
                      />
                      {errors.location && <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">{errors.location}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">Additional Details (Optional)</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                        placeholder="Tell us a bit about your space and specific requirements..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <Button type="submit" className="w-full text-base shadow-lg shadow-gold/20 py-4">
                        Send Request
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
