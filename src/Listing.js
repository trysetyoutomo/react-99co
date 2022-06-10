import React from "react";
import Building from "./Building";

class Listing extends React.Component{
    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render(){
        return (
            <div className="listing mx-auto">
                <div className="arrows">
                    <div className="arrow arrow-right">
                        <div className="arrow-container">
                            <img alt="Arrow Right"src="./images/icon/arrow left.svg" />
                        </div>
                    </div>
                    <div className="arrow arrow-left">
                        <div className="arrow-container">
                            <img alt="Arrow Left"src="./images/icon/arrow.svg" />
                        </div>
                    </div>
                </div>
                <Building setShowProductDetail={this.props.setShowProductDetail}  width="standar"></Building>
              
            </div>
        )
    }
}

export default Listing;