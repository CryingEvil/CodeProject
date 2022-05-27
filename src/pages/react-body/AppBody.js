import React from "react";
import { Navbar, Nav,ListGroup, ListGroupItem } from "reactstrap";
import './AppBody.css';
import axios from "axios";



class AppBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false,
            errMsg: ""
        };
    }
    componentDidMount(){
        this.getItem();
    }
    getItem() {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=%7Bkeyword")
            .then(res => {
                console.log(res);
                this.setState({
                    error: false,
                    data : res.data.items
                });
            })
            .catch(error => {
                this.setState({
                    error : true,
                    errMsg : error
            })
            });
    }

    render() {
        const {data,error,errMsg} = this.state;

        return(
            <table>
                <thead>
                    <th>head1</th>
                    <th>head2</th>
                </thead>
                <tbody>
                {data.map((book,index)=>(
                    <tr key={index}>
                        <td>{book.volumeInfo.title}</td>
                        <td>{book.volumeInfo.publisher? book.volumeInfo.publisher:'-'}</td>
                        <td><img src={book.volumeInfo.imageLinks.thumbnail}></img></td>
                    </tr>
                ))}
                </tbody>
            </table>
            // <ListGroup>
            //     {data.map((book,index)=> (
            //         <ListGroupItem key={index}>
            //             <div style={{display:"flex"}}>
            //                 <
            //             </div>
            //         </ListGroupItem>
            //     ))}
            // </ListGroup>
        );
        // return (
        //     <div className="app-body">
        //         <body>
        //             <h1>TEST ERWIN</h1>

        //         </body>
        //     </div>
        // );
    }

}
export default AppBody;