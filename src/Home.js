import React from "react";
import Listing from "./Listing";
import Modal from "./Modal";
import Building from "./Building";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showProduct : false
        }

        this.setShowProductDetail = this.setShowProductDetail.bind(this);
    }

    setShowProductDetail(content, show){
        let vm = this;
        // console.log('123');
        vm.setState({
            content : content,
            showProduct: show
        });
    }

    render(){
        let vm = this;
        return (
        <div className = "App" >
            <div className='container'>
                <header>
                    <div className='float-left title'><img src="./images/TEST.png" /> </div>
                    <div className='float-right logo'><img src="./images/FRONTend.png" /></div>
                    <div className="clear-both"></div>
                </header>
                <div className='wrapper content'>
                    <div className="heading">
                        <div className="heading-content">
                            <h1>Start your journey</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <Listing setShowProductDetail={this.setShowProductDetail}></Listing>
                  
                </div>
            </div>
            {
                vm.state.showProduct ? <Modal setShowProductDetail={this.setShowProductDetail} content={this.state.content} size="large" ></Modal> : null
            }
    </div> 
        )
}
}

export default Home;