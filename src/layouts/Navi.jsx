import React,{useState} from "react";
import { Menu } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
export default function Navi() {
  
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
        
      <Menu stackable size="large">
        <Menu.Item
          style={{
            color: "#357129",
            fontSize: "25px",
            fontFamily: "Comic Sans Ms",
            fontWeight: "bold",
          }}
        >
          GelecekBiz.de
        </Menu.Item>

        <Menu.Item name="homepage">
        <Link to={`/`} style={{color:'inherit',textDecoration:'inherit'}}>
          <Icon
            name="home"
            size="large"
            style={{ marginRight: "auto", marginLeft: "auto" }}
          />
          </Link>
        </Menu.Item>

        <Menu.Item name="isAra" style={{fontSize: "15px",
            fontFamily: "Comic Sans Ms",
            fontWeight: "bold", textAlign:"center"}}><Icon name="search" size="large"/>
            <Link to={`/jobadvertisements`} style={{color:'inherit',textDecoration:'inherit'}}>İş Ara</Link></Menu.Item>
        <Menu.Item name="isVerenler" style={{fontSize: "15px",
            fontFamily: "Comic Sans Ms",
            fontWeight: "bold", textAlign:"center"}}><Icon name="money" size="large"/>
            <Link to={`/employers`} style={{color:'inherit',textDecoration:'inherit'}}> İş Verenler</Link></Menu.Item>
            <Menu.Item name="isVerenler" style={{fontSize: "15px",
            fontFamily: "Comic Sans Ms",
            fontWeight: "bold", textAlign:"center"}}><Icon name="users" size="large"/>İş Arayanlar</Menu.Item>

        <Menu.Item name="blog" style={{fontSize: "15px",
            fontFamily: "Comic Sans Ms",
            fontWeight: "bold", textAlign:"center"}}><Icon name="blogger" size="large"/>Blog</Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item>
          {isAuthenticated ? (
            <SignedIn signOut={handleSignOut}/>
          ) : (
            <SignedOut signIn={handleSignIn}/>
          )}
          
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      
    </div>
  );
}
