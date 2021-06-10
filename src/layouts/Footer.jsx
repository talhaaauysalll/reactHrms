import React from "react";
import { Segment, Grid,Button } from "semantic-ui-react";
export default function Footer() {
  return (
    <div>
      <Segment
        style={{
          position: "fixed",
          bottom: "0px",
          left: "0px",
          width: "100%",
          height: "200px",
          backgroundColor: "gray",
        }}
      >
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
                <p style={{color:'white'}}>Sosyal Medyada Bizi Takip Edin</p>
              <Button circular color="facebook" icon="facebook"/><a style={{color:'white'}}>Gelecekbizde</a><br/>
              <Button circular color="twitter" icon="twitter"/><a style={{color:'white'}}>Gelecekbizde</a><br/>
              <Button circular color="linkedin" icon="linkedin"/><a style={{color:'white'}}>Gelecekbizde</a><br/>
              <Button circular color="google plus" icon="google plus"/><a style={{color:'white'}}>Gelecekbizde</a>
            </Grid.Column>
            <Grid.Column width={8}>
                <p style={{color:'white'}}>Hakkımızda</p>
                <p style={{color:'white'}}>İletişim</p>
                <p style={{color:'white'}}>Veri Politikamız</p>
                <p style={{color:'white'}}>KVKK</p>
                <p style={{color:'white'}}>İlan Verin</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
