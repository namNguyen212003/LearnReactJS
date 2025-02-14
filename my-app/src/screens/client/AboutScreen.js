import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import handleApi from "../../api/handleApi";
import { useNavigate } from "react-router-dom";

const AboutScreen = () => {
  const [type, setType] = useState("sach");
  const [id, setId] = useState("");
  const [datas, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleApi(`http://localhost:8080/${type}`, { name: "toi la nam" }, "GET")
      .then((data) => {
        console.log("data2: ", data);

        setData(data?._embedded?.saches);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  }, [type]);

  const handleGetId = (id) => {
    setId(id);
    navigate(`/about/${id}`);
  };

  return (
    <div>
      About nam
      {datas?.map((item) => (
        <div key={item?.maSach} className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item?.tenSach}</h5>
            <p className="card-text">{item?.moTa}</p>
            <a
              onClick={() => handleGetId(item?.maSach)}
              href="#"
              className="btn btn-primary"
            >
              {item?.tenTacGia}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

AboutScreen.propTypes = {};

export default AboutScreen;
