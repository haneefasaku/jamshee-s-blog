import { Button, Footer, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsGithub} from 'react-icons/bs'

function Root() {
    const path = useLocation().pathname
  return (
    <>
      <header>
        <Navbar className="border-b-2">
          <Link
            to={"/"}
            className="items-center text-sm sm:text-xl font-semibold dark:text-white whitespace-nowrap"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Jamshee's
            </span>
            Blog
          </Link>
          <form>
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline"
            />
          </form>
          <Button
            className="w-12 h-10 lg:hidden border items-center"
            color="grey"
            pill
          >
            <AiOutlineSearch />
          </Button>
          <div className="flex gap-2 md:order-2">
            <Button
              className="w-12 h-10 hidden sm:inline border"
              color="grey"
              pill
            >
              <FaMoon />
            </Button>
            <Link to={"/signin"}>
              <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
            </Link>
            <Navbar.Toggle/>
          </div>
          <Navbar.Collapse>
            <Navbar.Link active={path==='/'} as={'div'}>
              <Link to={"/"}>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/about'} as={'div'}>
              <Link to={"/about"}>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/projects'} as={'div'}>
              <Link to={"/projects"}>Projects</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Outlet />
      <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
                <Link
                to={"/"}
                className="items-center text-sm sm:text-xl font-semibold dark:text-white whitespace-nowrap"
              >
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                  Jamshee's
                </span>
                Blog
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3">
              <div>
                <Footer.Title title='About'/>
                <Footer.LinkGroup col>
                  <Footer.Link
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    100 Js Projects
                  </Footer.Link>
                  <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    Jamshee's Blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='FOLLOW US'/>
                <Footer.LinkGroup col>
                  <Footer.Link
                  href="https://github.com/haneefasaku"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link
                  href="#"
                  >
                    Discode
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='FOLLOW US'/>
                <Footer.LinkGroup col>
                  <Footer.Link
                  href="#"
                  >
                   Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#">
                    Terms &amp; condition
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div> 
          </div>
          <Footer.Divider/>
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Jamshee's Blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4
            sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook}/>
              <Footer.Icon href="#" icon={BsInstagram}/>
              <Footer.Icon href="#" icon={BsTwitter}/>
              <Footer.Icon href="#" icon={BsYoutube}/>
              <Footer.Icon href="https://github.com/haneefasaku" icon={BsGithub}/>
            </div>
          </div>
        </div>

      </Footer>
    </>
  );
}

export default Root;
