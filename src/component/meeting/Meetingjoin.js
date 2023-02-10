import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Button, Form } from "react-bootstrap";

function Meetingjoin() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" ,height: "1000px"  }}>
        <div
          style={{ height:"800px",width: "580px",border: "1px solid #c6c6c6",marginTop:'50px', marginLeft:"400px",borderRadius:"6px", }}
        >
          <Form style={{ marginLeft:"40px", width:"500px", marginTop:'10px'}}>
            <Form.Group className="mb-3" controlId="formBasicmeeting">
              <Form.Label style={{ textAlign: "right" }}>모임명</Form.Label>
              <Form.Control type="text" placeholder="내용을 입력해주세요" />
              <Form.Text className="text-muted">
                <Form.Group>
                  <label>모임방식</label>
               
                  <input type="checkbox" name="공개" value="gender" />
                  글쓰기
                  <input type="checkbox" name="비공개" value="age" /> 토론
                </Form.Group>
              </Form.Text>
              <Form.Label>카테고리</Form.Label>
              <Form.Select aria-label="">
                <option>카테고리를 설정해주세요</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPlace">
              <Form.Label>장소</Form.Label>

              <Form.Control type="text" placeholder="" />
              <Button>입력</Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPlace">
              <Form.Label>인원</Form.Label>

              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>소개</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>

            <Form.Group>
              <label>성별</label>
              <input type="checkbox" name="공개" value="gender" />
              공개
              <input type="checkbox" name="비공개" value="age" /> 비공개
            </Form.Group>
            <Form.Group>
              <label>나이</label>
              <input type="checkbox" name="color" value="blue" /> 공개
              <label>
                <input type="checkbox" name="color" value="red" /> 비공개
              </label>
            </Form.Group>
            <Button  onClick={()=>
                navigator("/")
            } variant="primary" type="submit">
              모임개설
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Meetingjoin;
