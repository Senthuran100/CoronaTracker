import React from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import ToastMessage from './ToastMessage';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = { district: '', date: '', number_of_cases: ''};
        this.state.show=false;
        this.addChange = this.addChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    resetBook = () =>{
        this.setState({district: '', date: '', number_of_cases: ''});
    }

    submitBook=event => {
        event.preventDefault();
        const book ={
            district:this.state.district,
            date: this.state.date,
            number_of_cases : this.state.number_of_cases
           
        }
        const accesstoken= localStorage.getItem("accessToken");
        const header = { headers: {'Authorization': 'Bearer ' + accesstoken}};
        axios.post("https://localhost:8243/cornona/1.0.0/cases",book,header)
        .then(response =>{
            if(response.data != null){
               this.setState({"show":true});
               setTimeout(() =>  this.setState({"show":false}), 3000 );
            } else{
                this.setState({"show":false});
            }
        })
        this.setState({district: '', date: '', number_of_cases: ''});
    }

    addChange=event=> {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    render() {
        
        const {district, date, number_of_cases  } = this.state;
        return (
            !this.props.auth.isAuthenticated()?(
                <Card className={"border border-dark text-center bg-dark text-white"}>
                    <Card.Header>
                        <h2>Please Sign in to Add the Corona Record</h2>
                    </Card.Header>
                </Card>
            ):(
            <div>
             <div style={{"display":this.state.show ? "block":"none"}}>
                <ToastMessage children={{show:this.state.show, message : "Record Added Successfully"}}/>
             </div>  
             <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Book List
            </Card.Header>
                <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookid">
                    <Card.Body>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridDistrict">
                                <Form.Label>District</Form.Label>
                                        <Form.Control as="select" className={"bg-dark text-white"} name="district" onChange={this.addChange} required>
                                          <option value="Colombo">Colombo</option>
                                          <option value="Kalutara">Kalutara</option>
                                          <option value="Galle">Galle</option>
                                          <option value="Gampaha">Gampaha</option>
                                          <option value="Kandy">Kandy</option>
                                        </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCases">
                                <Form.Label>Number of New Cases</Form.Label>
                                <Form.Control autoComplete="off" required type="number" min="0" name="number_of_cases" placeholder="Enter New Cases" className={"bg-dark text-white"} value={number_of_cases} onChange={this.addChange} required />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="date">
                                <Form.Label>Date</Form.Label>

                                <Form.Control autoComplete="off" required type="date" name="date" placeholder="Enter date in {YYYY-MM-DD} Format" className={"bg-dark text-white"} value={date} onChange={this.addChange} required />

                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer>
                        <Button size="sm" variant="success" type="submit"> 
                            Submit
                        </Button>{' '}
                        <Button size="sm" variant="warning" type="reset">
                            Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>  
            </div>  
            )
           
        );
    }

}

export default AddBook;