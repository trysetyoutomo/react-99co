import React from "react";
import Building from "./Building";
import BuildingMap from "./BuildingMap";

class Modal extends React.Component{

    constructor(props) {
        super(props);
    }

    setHide(){
        this.props.setShowProductDetail(this.props.content, false)
    }

    render(){
        return (
            <div className="modal">
                <div onClick={this.setHide.bind(this)} className="modal-backdrop"></div>
                <div className="modal-body">
                    {
                        this.props.content === "detail" ?
                        <Building setShowProductDetail={this.props.setShowProductDetail} size={this.props.size} content={this.props.content} /> :        
                        <BuildingMap setShowProductDetail={this.props.setShowProductDetail} size={this.props.size} content={this.props.content} /> 
                    }
                </div>
            </div>
        )
    }

}

export default Modal;