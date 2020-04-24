import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  margin: 0 auto;
  padding: 20px 0;
  h3 {
    color: #ff6363;
    text-align: center;
  }
  .invalid-feedback {
    color: #ff6363;
  }
  p {
    margin: 0;
    color: #ff6363;
  }
  button {
    background-color: #7fa998;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.375rem 0.75rem;
    font-size: 15px;
    color: white;
    width: 100%;
    cursor: pointer;
  }
`;
const Margin = styled.div`
  margin: 15px;
`;
// Messages
const required = "필수항목입니다.";
const maxLength = "-";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

export default function RegisterPage(props) {
  const { register, watch, handleSubmit, errors, control } = useForm();
  let pwd = watch("password");
  const onSubmit = (data) => {
    console.log(data);
    props.history.push("./");
  };

  return (
    <Container>
      <h2>회원가입</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이름</label>
        <input
          type="text"
          name="Username"
          ref={register({ required: true, maxLength: 20 })}
        />
        {errors.Username &&
          errors.Username.type === "required" &&
          errorMessage(required)}
        {errors.Username &&
          errors.Username.type === "maxLength" &&
          errorMessage(maxLength)}

        <Margin />

        <label>비밀번호</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "비밀번호를 입력해주세요",
          }}
          as={<input name="password" type="password" variant="outlined" />}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Margin />

        <label>비밀번호 확인</label>
        <Controller
          name="password_repeat"
          control={control}
          rules={{
            required: "비밀번호를 확인해주세요",
            validate: (value) =>
              value === pwd || "비밀번호가 일치하지 않습니다.",
          }}
          as={
            <input name="password_repeat" type="password" variant="outlined" />
          }
        />
        {errors.password_repeat && <p> {errors.password_repeat.message}</p>}

        <Margin />

        <label>이메일</label>
        <input
          type="email"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email &&
          errors.Email.type === "required" &&
          errorMessage(required)}

        <Margin />

        <label>생일</label>
        <input
          type="datetime"
          name="DateofBirth"
          ref={register({
            pattern: /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i,
          })}
        />
        {errors.DateofBirth && errorMessage("MM/DD/YYYY ex)12/31/2020")}

        <Margin />
        <br />

        <button type="submit">회원가입</button>
      </form>

      <Link to="/LoginPage">
        <h3>가입취소</h3>
      </Link>
    </Container>
  );
}
