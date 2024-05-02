import React, { useState } from "react";
import Auth from "@/components/Auth";
import { useAuthContext } from "@/store/auth";

import "./TopNav.css"; // You can define your custom styles in this CSS file

export default function TopNav() {
  const { isUserAuthenticated, user, signOut } = useAuthContext();
  const [authVisible, setAuthVisible] = useState(false); // authentication modal visibility

  return (
    <>
      <Auth visible={authVisible} setVisible={setAuthVisible} />
      <div className="top-navigation">
        <a href="/" className="logo">
          <img className='h-full w-[180px]' src="/logic-lane-logo.png" alt="Logo" />
        </a>
        <div className="nav-items">
          <ul>
            {/* <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li> */}
            {isUserAuthenticated ? (
              <li>
                <a onClick={signOut}>Sign Out</a>
              </li>
            ) : (
              <li>
                <a onClick={() => setAuthVisible(true)}>Sign In</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
