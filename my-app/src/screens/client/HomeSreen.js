import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import handleApi from '../../api/handleApi';
import styles from "./about.module.css"

const HomeSreen = () => {
    const [type, setType] = useState();
    const [datas, setData] = useState([]);

    useEffect(() => {
        handleApi(`http://localhost:8080/sach`, { name : "toi la nam"}, 'GET')
            .then(data => {
                console.log("data: ", data?._embedded?.saches);
                
            setData(data?._embedded?.saches);
        }).catch(error=>{
            console.log("ERROR: ", error);
        });
    }, [type]);


    return (
        <div>
            Home
            <div className={styles.card_container}>
                {datas.map(item => (
                <div key={item?.maSach} className={styles.card} style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{item?.tenSach}</h5>
                    <p className="card-text">{item?.moTa}</p>
                    <a href="#" className="btn btn-primary">
                        {item?.tenTacGia}
                    </a>
                    </div>
                </div>
                ))}
            </div>
        </div>

    );
};


HomeSreen.propTypes = {

};


export default HomeSreen;
