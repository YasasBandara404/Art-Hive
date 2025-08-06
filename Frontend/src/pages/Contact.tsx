import { useState } from "react";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useApiMutation, extractErrorMessage } from "../hooks/useFetch";
import ContactService from "../services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const contactMutation = useApiMutation(ContactService.sendMessage);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      await contactMutation.mutateAsync(formData);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setError(extractErrorMessage(err));
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12 dark:text-white">Contact Us</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
                {
                  icon: <Mail className="h-8 w-8 text-ct-blue-500 dark:text-ct-blue-400" />,
                  title: "Email",
                  details: "arthive@gmail.com",
                  description: "For general inquiries and support"
                },
                {
                  icon: <Phone className="h-8 w-8 text-ct-blue-500 dark:text-ct-blue-400" />,
                  title: "Phone",
                  details: "+94 752660551",
                  description: "Monday-Friday, 9am-5pm"
                },
                {
                  icon: <MapPin className="h-8 w-8 text-ct-blue-500 dark:text-ct-blue-400" />,
                  title: "Office",
                  details: "123 Digital Avenue, Colombo 04",
                  description: "Sri Lanka"
                }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 shadow-sm text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 dark:text-white">{item.title}</h3>
                <p className="font-medium text-ct-blue-500 dark:text-ct-blue-400">{item.details}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border dark:border-gray-700 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Send us a Message</h2>
            
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 p-3 rounded mb-6">
                {error}
              </div>
            )}
            
            {isSuccess ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mb-6">
                <p className="text-green-700 dark:text-green-400">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Account Issues">Account Issues</option>
                    <option value="Payment Issues">Payment Issues</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2 rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-ct-blue-500 hover:bg-ct-blue-600"
                  disabled={contactMutation.isLoading}
                >
                  {contactMutation.isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Find Us</h2>
            <div className="h-80 rounded-lg overflow-hidden border dark:border-gray-700">
              <iframe
                title="Art Hive Location"
                src="https://www.google.com/maps?q=7.2701898,80.6188134&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
