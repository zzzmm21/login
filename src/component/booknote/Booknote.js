import Footer from "../layout/Footer";
import Header from "../layout/Header";
import styles from "./Booknote.css";
import Chartdata from "./Chartdata";
import { useState, useEffect } from "react";
import { PieChartComponent } from "./PieChartComponent";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Modal from "../booknote/Modal"

function Booknote() {
  let [countspan, setcountspan] = useState(5);
  let [name, setName] = useState("");
  const [categoryname, setcategoryname] = useState([]);
  const [notelist, setNoteList] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
};
const closeModal = () => {
  setModalOpen(false);
};

  
  const notebookdel = () => {
    if (window.confirm("삭제하시겟습니까")) {
      axios.delete("http://localhost:5000/api/notelist",{
        title: setNoteList.title
      }).then(response=>{
        console.log(response)
      })
      
  
   
    }else{
      console.log("error")
    }
  };
  useEffect(() => {
    axios.get("/api/notelist").then((response) => {
      setNoteList(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/category").then((response) => {
      setcategoryname(response.data);
    });
  }, []);
  return (
    <div className="main">
      <Header></Header>
      <div className="booknote" style={{ height: "1400px", width: "2000px" }}>
        <div className="booknotelay">
          <div className="booknote-sidebar">
            <div className="sidebar-card"></div>
            <img
              style={{ height: "300px", display: "flex" }}
              className="avatar"
              src="https://avatars.githubusercontent.com/u/114986610?v=4"
            ></img>
            <div className="cardname">
              <h1 className="carduser">SunMoo</h1>
            </div>
            <div className="cardusercolum">
              <Link
                style={{
                  color: "var(--color-fg-muted) !important",
                  textDecorationLine: "none",
                }}
                to="https://github.com/YuumiNam?tab=followers"
              >
                followers{" "}
              </Link>
              <span
                onClick={() => {
                  setcountspan(countspan + 1);
                }}
              >
                🧡{countspan}
              </span>
              .
              <Link
                style={{
                  color: "var(--color-fg-muted) !important",
                  textDecorationLine: "none",
                }}
                to="https://github.com/YuumiNam?tab=following"
              >
                following{" "}
              </Link>
              <span
                onClick={() => {
                  setcountspan(countspan + 1);
                }}
              >
                🧡{countspan}
              </span>
              <br />
              <Link
                to="/booknote/writebook"
                style={{ textDecoration: "none", color: "black" }}
              >
                노트 작성하기 📗
              </Link>
            </div>
          </div>

          <div className="booknote-mian" style={{ height: "500px" }}>
            <div
              className="container"
              style={{ display: "flex", gap: "15px", marginTop: "20px" }}
            >
              <div style={{ width: "300px", height: "300px" }}></div>
              <label className="box-body">
                <h2> as 목표 도서수 {100}</h2>
              </label>
            </div>
            <div className="glassbox">
              <div style={{ margin: "5px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://ghchart.rshah.org/yuumiNam"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="booknote-under" style={{ height: "800px" }}>
          <div className="booknote-select">
            <select
              className="form-select"
              style={{ width: "300px", fontSize: "1.4em" }}
            >
              {categoryname.map((category) => {
                return (
                  <option key={category.name} value={category}>
                    {category.name}
                  </option>
                );
              })}
            </select>

            <form
              className="d-flex"
              role="search"
              style={{ width: "400px", float: "right" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ fontSize: "1.5em" }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="booknote-undermain">
            <div>
              <div className="booknote-underlist" style={{ fontSize: "2.0em" }}>
                <div
                  className="booknotelist1"
                  style={{
                    paddingTop: "30px",
                    paddingBottom: "20px",
                    display: "flex",
                  }}
                >
                  <div className="tumb">
                    <img
                      src="https://cdn.imweb.me/thumbnail/20230207/dc3893133ad54.jpg"
                      style={{ width: "160px" }}
                    ></img>
                  </div>
                  <div
                    className="booknotelisttitle1"
                    style={{ width: "900px" }}
                  >
                    <h3 style={{ margin: "15px" }} ># 소설 # 역사 # 기타</h3>
              
                    <h5 style={{ margin: "10px" }}>도서명 : 여긴어디지</h5>
                    <h5 style={{ fontSize: "18px", margin: "10px" }}>
                      제목 : 니나니노{" "}
                    </h5>
                  </div>
                  <div
                    className="booknotelisticon"
                    style={{ display: "block" }}
                  >
                    <span
                      style={{ height: "100px" }}
                      onClick={() => {
                        setcountspan(countspan + 1);
                      }}
                    >
                      👍{countspan}
                    </span>
                    <br />
                    <span style={{ height: "50px", width: "80px" }}>
                      🗑</span>
                  </div>
                </div>
                <hr></hr>

                <div className="booknotelist1" style={{}}>
                  {notelist.map((booknotlist) => {
                    return (
                      <div>
                        <div className="tumb">
                          <img
                            src="https://cdn.imweb.me/thumbnail/20230204/1225630397680.jpg"
                            style={{ width: "160px" }}
                          ></img>
                        </div>
                        <div
                          key={booknotlist.title}
                          className="booknotelisttitle1"
                          style={{
                            width: "1000px",
                            paddingTop: "30px",
                            paddingBottom: "20px",
                            display: "flex",
                          }}
                        >
                          <h3
                            style={{ margin: "15px" }}
                            onClick={openModal}
                            
                          
                          >
                      
                    
                            {booknotlist.title}
                          </h3>
                          {modalOpen && <Modal setModalOpen={setModalOpen} />}
                          <h5 style={{ margin: "10px" }}>
                            {booknotlist.content}
                          </h5>

                          <div
                            className="booknotelisticon"
                            style={{ display: "block" }}
                          >
                            <span
                              style={{ height: "100px" }}
                              onClick={() => {
                                setcountspan(countspan + 1);
                              }}
                            >
                              👍{countspan}
                            </span>
                            <br />
                            <span
                            onClick={notebookdel}
                              style={{ height: "50px", width: "80px" }}
                            >
                              🗑
                            </span>
                          </div>
                        </div>
                        <hr></hr>
                      </div>
                    );
                  })}
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-nav">
        <nav
          aria-label="Page navigation example"
          style={{ display: "inline-block" }}
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Booknote;
