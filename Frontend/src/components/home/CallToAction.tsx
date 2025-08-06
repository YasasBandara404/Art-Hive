import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="py-12 md:py-24 bg-ct-blue-500">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              Ready to Join Our Creative Community?
            </h2>
            <p className="text-ct-blue-100 md:text-lg mb-6">
              Whether you're looking to showcase your digital creations or discover unique content, 
              Create & Trade provides the platform you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-white text-ct-blue-600 hover:bg-gray-100">
                <Link to="/auth">Create an Account</Link>
              </Button>
              <Button asChild variant="outline" className="text-blue-700 border-white hover:bg-ct-blue-400">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg p-6 bg-white/10 backdrop-blur-sm border border-white/20 mx-auto max-w-md w-full">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Why Art Hive?</h3>
              <ul className="space-y-3">
                {["User-friendly platform for digital content creators", "Secure transactions with Sri Lankan Rupees (LKR) support", "Social engagement features to grow your audience", "Diverse categories for all types of digital content", "Simple upload and management of your digital products"].map((feature, index) => <li key={index} className="flex items-start">
                    <div className="mr-2 mt-0.5 rounded-full bg-white/20 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;