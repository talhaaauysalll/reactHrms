import React,{useState} from "react";
import { Menu } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
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
          <Icon
            name="home"
            size="large"
            style={{ marginRight: "auto", marginLeft: "auto" }}
          />
        </Menu.Item>

        <Menu.Item name="isAra" style={{fontSize: "15px",
            fontFamily: "Comic Sans Ms",
            fontWeight: "bold", textAlign:"center"}}><Icon name="search" size="large"/>İş Ara</Menu.Item>
        <Menu.Item name="isVerenler" style={{fontSize: "15px",
            fontFamily: "Comic Sans Ms",
            fontWeight: "bold", textAlign:"center"}}><Icon name="money" size="large"/>İş Verenler</Menu.Item>
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
