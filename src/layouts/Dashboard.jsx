import React from 'react'
import { Grid } from "semantic-ui-react";
import EmployerList from '../pages/EmployerList';
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row width={3}>
                    <Grid.Column>
                        <EmployerList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
