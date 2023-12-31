import { Form } from "react-bootstrap";
import CenterdOverlayForm from "../components/shared/CenterdOverlayForm";
import { useSetRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateGroup() {
  const [validated, setValidated] = useState(false);
  const [validGroupName, setValidGroupName] = useState(false);
  const setGroupName = useSetRecoilState(groupNameState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidGroupName(true);
      // 다음 페이지로
      navigate("/members");
    } else {
      event.stopPropagation();
      setValidGroupName(false);
    }
    setValidated(true);
  };

  return (
    <CenterdOverlayForm
      title="먼저, 더치 페이 할 그룹의 이름을 정해볼까요?"
      validated={validated}
      handleSubmit={handleSubmit}
    >
      <Form.Group controlId="validationGroupName">
        <Form.Control
          type="text"
          required
          placeholder="2022 제주도 여행"
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />
        <Form.Control.Feedback type="invalid" data-valid={validGroupName}>
          그룹 이름을 입력해 주세요.
        </Form.Control.Feedback>
      </Form.Group>
    </CenterdOverlayForm>
  );
}
