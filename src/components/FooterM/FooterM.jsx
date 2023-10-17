import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FiGlobe } from "react-icons/fi";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function FooterM() {
  const links = [
    "Privacy",
    "Terms",
    "Sitemap",
    "Company Details",
    "Destinations",
  ];

  return (
    <div className="footer">
      <div className="asdfg">
        <ul className="flex gap-3 font-normal">
          <li>© 2023 Airbnb, Inc</li>
          {links.map((link) => (
            <li key={link}>
              <Link to="#" className="capitalize">
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4 font-medium">
          <li className="flex items-center gap-2 cursor-pointer">
            <div className="icon-text-container">
              <FiGlobe className="globe-icon" />
              English (IN)
            </div>
          </li>
          <li className="cursor-pointer"> $ USD</li>
          <li className="flex items-center gap-2 cursor-pointer">
            Support & Resources
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/sallllbilal">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://telegram.org/">
              <TelegramIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
