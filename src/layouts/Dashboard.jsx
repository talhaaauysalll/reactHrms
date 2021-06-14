import React from 'react'
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import EmployerList from '../pages/EmployerList';
import HomePage from './HomePage';
import JobAdvertisementList from '../pages/JobAdvertisementList';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row width={3}>
                    <Grid.Column>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/employers" component={EmployerList}/>
                        <Route exact path="/jobadvertisements" component={JobAdvertisementList}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
