import Link from 'next/link';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1d3557] to-[#457b9d] py-28 px-8 flex justify-center text-white">
      <div className="max-w-6xl w-full bg-[#1c2541] p-8 rounded-lg shadow-xl flex gap-12 flex-col md:flex-row">
        
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-[#f1faee] mb-8">Get in Touch</h1>

          <div className="mb-8">
            <p className="text-lg text-[#a8dadc] mb-6">
              Feel free to reach out to me through email, phone, or my social media accounts. I&apos; d love to hear from you!
            </p>
          </div>

          <div className="text-lg space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-[#f4a261]">&#9993;</span>
              <a href="mailto:awaissoomro65@gmail.com" className="hover:underline text-[#f1faee]">
                awaissoomro65@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#f4a261]">&#9742;</span>
              <Link href="tel:+923025345219" className="hover:underline text-[#f1faee]">
                +92 3025345219
              </Link>
            </div>

            <div className="mt-8 flex gap-6">
              <Link href="https://www.linkedin.com/in/meetawaissoomronow" className="text-[#f4a261] hover:text-[#e63946]" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
              <Link href="https://github.com/awais995" className="text-[#f4a261] hover:text-[#e63946]" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#1d3557] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#f1faee] mb-6">Send a Message</h2>
          <form action="mailto:yourname@example.com" method="POST" encType="text/plain" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-[#a8dadc]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-4 bg-[#457b9d] text-[#f1faee] rounded-lg border border-[#a8dadc] focus:outline-none focus:ring-2 focus:ring-[#e63946]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-[#a8dadc]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-4 bg-[#457b9d] text-[#f1faee] rounded-lg border border-[#a8dadc] focus:outline-none focus:ring-2 focus:ring-[#e63946]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-[#a8dadc]">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-4 bg-[#457b9d] text-[#f1faee] rounded-lg border border-[#a8dadc] focus:outline-none focus:ring-2 focus:ring-[#e63946]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#457b9d] text-white px-6 py-3 rounded-lg hover:bg-[#e63946] border border-[#a8dadc] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
