import React from 'react'
import {Grid,Input,Button} from 'semantic-ui-react'
export default function JobAdvertisementList() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Input icon='search' placeholder='Şirket Ara' /><Button>Ara</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
