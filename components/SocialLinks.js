import React from "react";
import {SiLeetcode} from "react-icons/si";
import styled from "styled-components";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Leetcode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/yadav621gzp/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/vikash-kumar-yadav-8090/",
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/Vikash_8090_b",
    },
    {
      id: 4,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Vikash-8090-Yadav",
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:yadav621gzp@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <Mydiv>
    <div className="hidden lg:flex flex-col top-[25%] left-0 fixed text-white">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li key = {id} className = {"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
            <a href = {href} className = "flex justify-between items-center w-full" download = {download} target = "_blank" rel = "noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </Mydiv>
  );
};



const Mydiv = styled.div`
  @media (max-width: 1182px) {
    display: none;
  }
  
`;

export default SocialLinks;