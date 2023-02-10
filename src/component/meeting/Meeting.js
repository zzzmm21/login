import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Button,  Col, Row } from "react-bootstrap";
import styles from "./Meeting.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Link, useNavigate } from 'react-router-dom';


function Meeting() {
    
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      
        <div className={styles.meeting}>
          <div className={styles.cal}>
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin]}
              events={[
                { title: "일정1", date: "2023-01-01" },
                { title: "모임2", date: "2023-01-07" },
              ]}
            
            />
          </div>
          <div className={styles.login_user}>
            <article style={{backgroundColor:"#eee"}}>
              <Row>
                <Col className={styles.col1}>현재 모임</Col>
                <div className="mb-2">
                  <Button variant="warning" size="lg" style={{float: 'left'}}>
                    모임1
                  </Button>{" "}
            
                  <Button variant="warning" size="lg" style={{ float: 'left'}}>
                    모임2
                  </Button>{" "}
                </div>
                <div className="d-grid gap-2">
                    
                  <Button onClick={()=>{
                    navigate("/meetingjoin")
                  }} variant="primary" size="lg"className={styles.mbutton}>
                    모임 개설
                  </Button>
                 
                </div>
              </Row>
            </article>
          </div>
          <div className={styles.meetinginfo}>
            <h1 style={{textAlign: 'center'}}>모임정보</h1>
          <div className={styles.meetinginfo1} >모임
        
          <div className="meetinlist">
            <div className="list1" style={{paddingTop:"10px",paddingBottom:"10px", position:"relative",display:"flex"}}>
              <div className={styles.tumb1}>
                <Link to>
                <img src="https://cdn.imweb.me/thumbnail/20210513/c11d338c7208e.jpg" 
                style={{width: "170px",height: "auto"}}/>
                </Link>
              </div>
              <div className="title1" style={{}}>무자본 창업에 성공할 예비 창업가의 모임</div>
            </div>
            </div>
          </div>
         
        
        

          </div>
        </div>
      
    
      <Footer></Footer>
    </div>
  );
}

export default Meeting;
