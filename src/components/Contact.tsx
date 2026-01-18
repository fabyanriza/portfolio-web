import { Mail, Linkedin, Github, MessageSquare, Send } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init("YUKPRhpZK1WdrJlIp");
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send("service_cly008k", "template_g35o0dv", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "fabyanriza67@gmail.com",
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Interested in collaboration or have a project in mind? Feel free to
          reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 dark:bg-green-900 dark:bg-opacity-20 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-900 dark:bg-opacity-20 text-red-700 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800">
                  Failed to send message. Please try again or contact me
                  directly.
                </div>
              )}
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Connect With Me
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:fabyan.riza@example.com"
                className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    fabyanriza67@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/fabyan-riza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 p-3 rounded-lg">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    LinkedIn
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    linkedin.com/in/fabyan-riza
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/fabyanriza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                  <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    GitHub
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    github.com/fabyanriza
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/6285733872739"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-30 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    WhatsApp
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    +62 8573-3872-739
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 rounded-xl border border-blue-100 dark:border-blue-800">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                Open to Opportunities
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                I'm currently open to exciting data science and machine learning
                opportunities, research collaborations, and consulting projects.
                Let's build something impactful together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
