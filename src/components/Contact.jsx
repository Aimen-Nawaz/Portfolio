import * as React from "react";
import { useForm, Controller } from "react-hook-form";

function Contact() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
    reset();
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-linear-to-br from-[#fff7ed] via-[#f8fafc] to-[#eef2ff]"
    >
  
      <div className="absolute w-96 h-96 bg-pink-300/25 rounded-full blur-[150px] -top-40 -right-40"></div>
      <div className="absolute w-96 h-96 bg-blue-300/25 rounded-full blur-[150px] -bottom-40 -left-40"></div>

      
      <h1 className="absolute inset-0 flex items-center justify-center text-[120px] md:text-[220px] font-black text-black/3 select-none pointer-events-none tracking-[0.3em]">
        CONTACT
      </h1>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-gray-500 text-sm mb-4">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900">
            Contact
            <span className="ml-3 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

        
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              My Information
            </h3>

            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold mb-1">
                  Email
                </p>
                <a
                  href="mailto:aimenkhan840@gmail.com"
                  className="text-gray-700 hover:text-purple-500 transition"
                >
                  aimenkhan840@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold mb-1">
                  Phone
                </p>
                <a
                  href="tel:+923131503461"
                  className="text-gray-700 hover:text-purple-500 transition"
                >
                  +92 313 1503461
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/aimen-nawaz-691464313"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-purple-500 transition"
                >
                  linkedin.com/in/aimen-nawaz
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold mb-1">
                  GitHub
                </p>
                <a
                  href="https://github.com/Aimen-Nawaz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-purple-500 transition"
                >
                  github.com/Aimen-Nawaz
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold mb-1">
                  Location
                </p>
                <p className="text-gray-700">Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Send Message
            </h3>

            <div className="space-y-6">
              {/* Name */}
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      placeholder="Your Name"
                      className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-Black/60 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                )}
              />

              
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-black/60 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                )}
              />

        
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <div>
                    <textarea
                      {...field}
                      rows={6}
                      placeholder="Your Message"
                      className="w-full px-5 py-4 rounded-2xl bg-white/80 border text-black border-black/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                )}
              />

            
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-linear-to-r from-pink-500 via-purple-500 to-blue-500  font-semibold shadow-lg hover:-translate-y-1 transition duration-300"
              >
                Send Message 
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;