import React from "react";

class BuildingMap extends React.Component{
    constructor(props){
        super(props);

    }

    showModal(content, show){
        this.props.setShowProductDetail(content, show);
    }

    handleCloseButton(){
        this.showModal("map", false);
        this.showModal("detail", true);
    }

    render() {
        return (
            <div className={"building building-map mx-auto "+ this.props.size}>
                <div className="photo">
                    <img alt="Map Image" src="./images/map@2x.png" />
                </div>
                <div className="detail building-map ">
                    <div className="address">Jl. Sukajadi No. 1 Bandung, Jawa Barat</div>
                    <p className="address-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  and more recently with desktop publishing software like Aldus </p>
                    <div className="wrapper-btn">
                        <button onClick={this.handleCloseButton.bind(this)} className="btn btn-detail mx-auto">Tutup</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildingMap;