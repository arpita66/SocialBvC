import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  AddBox,
  AddBoxOutlined,
  SearchOutlined,
  Search,
  BookOutlined,
  Book,
  Message,
  MessageOutlined,
  AccountCircle,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const Header = () => {
  
  const [tab, setTab] = useState(window.location.pathname);      //ab location initial state hi rahegi reload krne par bhi
  return (
    <div className="header">
    <div className="headerLeft"><Typography variant="h5" fontFamily={'Lucida Handwriting'} style={{padding: "1vmax"}} >
          BvConnect
    </Typography>
    </div>
       <Link to="/" onClick={() => setTab("/")}>
         {tab === "/" ? <Home style={{ color: "black" }} /> : <HomeOutlined />}
       </Link>

       <Link to="/newpost" onClick={() => setTab("/newpost")}>
        {tab === "/newpost" ? 
           (<AddBox style={{ color: "black" }} />)
           : 
           ( <AddBoxOutlined />)
         }
        </Link> 
        
       <Link to="/blog" onClick={() => setTab("/blog")}>
        {tab === "/blog" ? 
           (<Book style={{ color: "black" }} />)
           : 
           ( <BookOutlined />)
         }
        </Link> 

        
       <Link to="/chat" onClick={() => setTab("/chat")}>
        {tab === "/chat" ? 
           (<Message style={{ color: "black" }} />)
           : 
           ( <MessageOutlined />)
         }
        </Link> 

       <Link to="/search" onClick={() => setTab("/search")}>
         {tab === "/search" ? (
           <Search style={{ color: "black" }} />
         ) : (
           <SearchOutlined />
         )}
       </Link>
       <Link to="/account" onClick={() => setTab("/account")}>
         {tab === "/account" ? (
          <AccountCircle style={{ color: "black" }} />
         ) : (
           <AccountCircleOutlined />
         )}
       </Link>
     </div>
  );
};

export default Header;