import React from 'react';

import { Header, Segment} from 'semantic-ui-react';


export default function theHeader(){
    return (
        <Segment>
            <Header as='h2' >
              This is the HEADER!
            </Header>
        </Segment>
    )
}