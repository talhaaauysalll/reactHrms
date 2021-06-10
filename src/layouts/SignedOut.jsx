import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
               <Button  onClick={signIn} inverted color='green'>Giriş yap</Button>
               <Button inverted color='green' style={{marginLeft:'0.5em'}}>Kayıt Ol</Button> 
            </Menu.Item>
        </div>
    )
}
