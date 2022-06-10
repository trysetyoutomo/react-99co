import React from "react";

class Building extends React.Component{
    constructor(props){
        super(props);

        // this.showModal = this.showModal.bind(this);
    }

    showModal(content, show){
        this.props.setShowProductDetail(content, show);
    }

    detailData(){
        return(
            <div className="detail">
                <div className="building-name">Rumah minimalis dijual di Bandung Jawa barat</div>
                <div className="address">Jl. Sukajadi No. 1 Bandung, Jawa Barat</div>
            </div>
        )
    }

    render() {
        let vm = this;
        return (
            <div className={"building mx-auto "+ this.props.size}>
                <div className="photo">
                    <img alt="Image Not Found" src="./images/building.png" />
                </div>
                <div className="building-content">
                    <div className="building-transaction">
                        <div className="transaction-type"><strong>Dijual</strong></div>
                        <div className="transaction-negotiable">Nego</div>
                        <div className="transaction-lovelist">
                            <img src="./images/icon/Love.svg" />
                        </div>
                        <div className="clear-both"></div>
                    </div>
                    <div className="price">
                        <span className="price fw-bold">Rp. 326 juta </span>
                        <span className="credit">Cicilan 2,61 juta/bln</span>
                    </div>
                    {   
                        vm.props.content === "detail" ?  vm.detailData(): ""
                    }
                    
                    <div className="features">
                        <ul>
                            <li>
                                <img alt="Image Not Found" src="./images/icon/Kamar Tidur.svg" />
                                <span>2K.Tidur</span>
                            </li>
                            <li>
                                <img alt="Image Not Found" src="./images/icon/Kamar mandi.svg" />
                                <span>2 K.Mandi</span>
                            </li>
                            <li>
                                <img alt="Image Not Found" src="./images/icon/Luas Tanah.svg" />
                                <span>62 m2</span>
                            </li>
                            <li>
                                <img alt="Image Not Found" src="./images/icon/Luas Bangunan.svg" />
                                <span>65 m2</span>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-btn">
                        {
                            this.props.content === "detail" ? 
                            <button onClick={this.showModal.bind(this,"map",true)} className="btn btn-detail mx-auto">Lihat Peta</button>
                            :
                            <button onClick={this.showModal.bind(this,"detail",true)} className="btn btn-detail mx-auto">Lihat Detail</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Building;