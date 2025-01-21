import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import handleApi from '../../api/handleApi';


const AboutScreen = () => {
    const [type, setType] = useState("sach");
    const [datas, setData] = useState([]);

    useEffect(() => {
        handleApi(`http://localhost:8080/${type}`, { name : "toi la nam"}, 'GET')
            .then(data => {
                console.log("data: ", data?._embedded?.saches);
                
            setData(data?._embedded?.saches);
        }).catch(error=>{
            console.log("ERROR: ", error);
        });
    }, [type]);


    return (
        <div>
            About nam
            {datas.map(item =>
                <div key={item?.maSach} className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item?.tenSach}</h5>
                    <p className="card-text">
                        {item?.moTa}
                    </p>
                    <a href="#" className="btn btn-primary">
                      {item?.tenTacGia}
                    </a>
                </div>
            </div>
            )}
           
        
        </div>
    );
};  


AboutScreen.propTypes = {

};


export default AboutScreen;
