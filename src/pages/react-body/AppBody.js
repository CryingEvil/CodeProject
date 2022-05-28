import React from "react";
import './AppBody.css';
import axios from "axios";
import Rater from 'react-rater'



class AppBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false,
            errMsg: "",
            dataFilter: [],
            books: [],
            searchVal: ""
        };
    }
    componentDidMount() {
        this.getItem();
    }

    fillAuthors(authors){
        const names = "";
        authors.map((val,indx)=>{
            names = names+ ", "+ val.value;
        })

        console.log(names);
        //return names;
    }

    fillStateItem(){
        const temp = [];
        this.state.data.map((val, index) => {
            temp.push({
                title: val.volumeInfo.title,
                publisher: val.volumeInfo.publisher,
                rating: val.volumeInfo.averageRating ? val.volumeInfo.averageRating : 0,
                img: val.volumeInfo.imageLinks.thumbnail,
                bookId: val.id,
                author: val.volumeInfo.authors? val.volumeInfo.authors :["-"]
            })
        })
        this.setState({
            books: temp
        })
        console.log(temp);
    }

    getItem() {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=%7Bkeyword")
            .then(res => {
                console.log(res);
                this.setState({
                    error: false,
                    data: res.data.items
                });
                this.fillStateItem();
            })
            .catch(error => {
                this.setState({
                    error: true,
                    errMsg: error
                })
            });
    }
    clickSearch = (event) => {
        this.setState({
            data: [],
            dataFilter: [],
            books: []
        })
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + event)
            .then(res => {
                this.setState({
                    error: false,
                    data: res.data.items,
                }, () => {
                    this.fillStateItem();
                });
            })
            .catch(error => {
                this.setState({
                    error: true,
                    errMsg: error
                })
            });


    }

    clickSave = (event) => {
        axios.post('http://localhost:3001/save', {
            title: event.title,
            bookId : event.bookId
        });
    }
    handleChangeSearch = (keyword) => {
        this.setState({
            searchVal: keyword
        })
    }

    
    render() {
        const { data, error, errMsg, dataFilter, books, searchVal } = this.state;
        var tempName = "";
        return (
            <div className="main-body">
                <div className="row">
                    <div className="col-12">
                        <div className="search-box" id="search-box">
                            <input className="search-txt" id="search-text"
                                onKeyDown={(ev) => {
                                    if (ev.key === 'Enter') {
                                        this.clickSearch(searchVal)
                                    }
                                }}
                                onChange={e => this.handleChangeSearch(e.target.value)} type="text" name="" placeholder="Type to search" />
                            <button className="search-btn" id="search-btn" >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="apptable">
                    <table>
                        <tbody>
                            {books.map((book, index) =>
                                <tr key={index}>
                                    <td><img src={book.img}></img></td>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="col-1">Title</td>
                                                    <td className="col-6">{book.title}</td>
                                                </tr>
                                                <tr>
                                                    <td className="col-1">Authors</td>
                                                    <td className="col-6">{book.author.map((name,i)=>{
                                                        if(i ==0)
                                                        {
                                                            tempName = name
                                                        }else{
                                                            tempName = tempName+', '+name
                                                        }
                                                        
                                                        
                                                    })}<label>{tempName}</label></td>
                                                </tr>
                                                <tr>
                                                    <td className="col-1">Publisher</td>
                                                    <td className="col-6">{book.publisher ? book.publisher : '-'}</td>
                                                </tr>
                                                <tr>
                                                    <td className="col-1">Rating</td>
                                                    <td className="col-6"><Rater total={5} rating={book.rating} interactive={false} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><button className="fav-btn" onClick={() => { this.clickSave(book) }}><i className="fas fa-heart"></i></button></td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            // <div className="app-body">
            //     <div className="table-responsive md">
            //         <table className="table-responsive">
            //             <thead>
            //                 <th>head1</th>
            //                 <th>head2</th>
            //             </thead>
            //             <tbody>
            //                 {data.map((book, index) => (
            //                     <tr key={index}>
            //                         <td>{book.volumeInfo.title}</td>
            //                         <td>{book.volumeInfo.publisher ? book.volumeInfo.publisher : '-'}</td>
            //                         <td><img src={book.volumeInfo.imageLinks.thumbnail}></img></td>
            //                     </tr>
            //                 ))}
            //             </tbody>
            //         </table>
            //     </div>
            // </div>
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