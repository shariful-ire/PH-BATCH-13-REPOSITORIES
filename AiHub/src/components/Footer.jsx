import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-zinc-950 border-t border-orange-900/40 pt-16 pb-10"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Logo & Description */}
          <div className="md:col-span-5">

            <div className="flex items-center gap-3 mb-6">

              <img
                src={logo}
                alt="AI Hub Logo"
                className="h-12 w-12"
              />

              <h2 className="text-3xl font-bold text-white">
                AI Hub
              </h2>

            </div>


            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              AI Hub is a platform where users can explore,
              compare, and access powerful AI models from one
              unified ecosystem.
            </p>


            {/* Social Links */}
            <div className="flex gap-5 mt-8 text-2xl">

              <a
                href="mailto:shariful.ire@gmail.com"
                className="text-zinc-400 hover:text-orange-400 transition"
                title="Email"
              >
                <FaEnvelope />
              </a>


              <a
                href="https://github.com/shariful-ire"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition"
                title="GitHub"
              >
                <FaGithub />
              </a>


              <a
                href="https://wa.me/8801826663235"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-green-500 transition"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>



          {/* Product */}
          <div className="md:col-span-2">

            <h3 className="text-orange-400 font-semibold mb-6 text-lg">
              Product
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li>
                <a href="#models" className="hover:text-white">
                  AI Models
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  API
                </a>
              </li>

            </ul>

          </div>



          {/* Company */}
          <div className="md:col-span-2">

            <h3 className="text-orange-400 font-semibold mb-6 text-lg">
              Company
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>

            </ul>

          </div>



          {/* Contact */}
          <div className="md:col-span-3">

            <h3 className="text-orange-400 font-semibold mb-6 text-lg">
              Contact
            </h3>


            <ul className="space-y-4 text-zinc-400">

              <li>
                <a
                  href="mailto:shariful.ire@gmail.com"
                  className="hover:text-white"
                >
                  shariful.ire@gmail.com
                </a>
              </li>


              <li>
                <a
                  href="https://wa.me/8801826663235"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: 01826-663235
                </a>
              </li>


              <li>
                <a
                  href="https://github.com/shariful-ire"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  github.com/shariful-ire
                </a>
              </li>

            </ul>

          </div>

        </div>



        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">

          © {new Date().getFullYear()} AI Hub. All rights reserved.
          <br />

          Built with ❤️ by Md Shariful Islam

        </div>


      </div>
    </footer>
  );
};

export default Footer;