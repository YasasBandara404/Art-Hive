import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border dark:border-gray-700 shadow-sm">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 dark:text-white">About Art Hive</h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                The premier platform for digital creators in Sri Lanka and beyond
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Founded in 2023, Art Hive was born out of a passion to support the growing community of digital creators in Sri Lanka. We recognized the need for a dedicated platform where artists, designers, educators, and other digital content creators could showcase their work and connect with potential buyers.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our mission is to democratize the digital marketplace, making it accessible to creators of all backgrounds and experience levels while providing buyers with high-quality, unique digital products.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  In our first year, we've helped hundreds of creators earn income from their digital creations and have facilitated thousands of transactions, becoming the go-to marketplace for digital goods in Sri Lanka.
                </p>
              </div>
              <div className="relative">
                <div className="border-2 border-ct-teal-500 bg-white dark:bg-gray-700 rounded-xl p-2 shadow-lg">
                  <img 
                    src="/images/logo.png" 
                    alt="Art Hive team" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-ct-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Our Values</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Creativity",
                    description: "We celebrate originality and innovation in all forms of digital expression."
                  },
                  {
                    title: "Quality",
                    description: "We maintain high standards for all content on our platform."
                  },
                  {
                    title: "Community",
                    description: "We foster connections between creators and their audiences."
                  },
                  {
                    title: "Accessibility",
                    description: "We make digital commerce accessible to creators of all backgrounds."
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg border dark:border-gray-600 shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-ct-blue-500 dark:text-ct-blue-400">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Meet the Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Rohan Mendis",
                    role: "Founder & CEO",
                    bio: "Digital entrepreneur with a passion for empowering creators",
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Nirmala Perera",
                    role: "Head of Operations",
                    bio: "Expert in digital marketplaces and creator economies",
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Dinesh Kumar",
                    role: "Technical Lead",
                    bio: "Full-stack developer specializing in marketplace platforms",
                    avatar: "/placeholder.svg"
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg border dark:border-gray-600 shadow-sm text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold dark:text-white">{member.name}</h3>
                    <p className="text-ct-blue-500 dark:text-ct-blue-400 mb-2">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-ct-blue-50 dark:bg-gray-700/50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Join Our Creative Community</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                Whether you're a creator looking to showcase your work or someone searching for unique digital content, Art Hive welcomes you to be part of our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-ct-blue-500 hover:bg-ct-blue-600">
                  <Link to="/auth">Create an Account</Link>
                </Button>
                <Button asChild variant="outline" className="dark:text-white dark:border-gray-600">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
