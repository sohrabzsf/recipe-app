import { FaSlackHash } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 gap-2 bg-neutral">
      <FaSlackHash className="text-3xl text-primary" />
      <ul className="flex gap-4">
        <li>
          <a className="font-bold text-primary" href="#">
            Website Terms
          </a>
        </li>
        <li>
          <a className="font-bold text-primary" href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="font-bold text-primary" href="#">
            Contact Information
          </a>
        </li>
      </ul>
      <p className="font-bold text-primary">
        Copyright &copy; {footerYear} All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
