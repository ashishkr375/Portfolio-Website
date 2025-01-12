const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/ashishkr375" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 mx-auto my-auto" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/ashish-kumar-nitp/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedIN.jpg" alt="twitter" className="w-1/2 h-1/2 mx-auto my-auto rounded-full" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://instagram.com/ashish_04_02" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 mx-auto my-auto" />
          </a>
          </div>
      </div>

      <p className="text-white-500">© 2025 Ashish Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
