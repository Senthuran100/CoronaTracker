import React from 'react';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';

class BookList extends React.Component {

    render() {
        return (

            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Corona List
                </Card.Header>
            </Card>

        );
    }

}

export default BookList;