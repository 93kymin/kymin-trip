import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  margin: 0 auto;
  padding-top: 30px;
  h3 {
    color: #7fa998;
    text-align: center;
  }
`;

const LoginForm = styled.form`
  p {
    margin: 0;
    color: #ff6363;
  }
  button {
    margin-top: 20px;
    padding: 5px;
    background-color: #4a65f6;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
  .checkbox input {
    display: none;
  }
  .checkbox span {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .checkbox .icon {
    position: relative;
    width: 17px;
    height: 17px;
    border: 1px solid #c8ccd4;
    border-radius: 3px;
    transition: background 0.1s ease;
  }
  .checkbox .icon::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 5px;
    width: 5px;
    height: 11px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg) scale(0);
    transition: all 0.3s ease;
    transition-delay: 0.15s;
    opacity: 0;
  }
  .checkbox .text {
    margin-left: 5px;
  }

  .checkbox input:checked ~ .icon {
    border-color: transparent;
    background: #ff1616;
    animation: jelly 0.6s ease;
  }
  .checkbox input:checked ~ .icon::after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }

  @keyframes jelly {
    from {
      transform: scale(1, 1);
    }
    30% {
      transform: scale(1.25, 0.75);
    }
    40% {
      transform: scale(0.75, 1.25);
    }
    50% {
      transform: scale(1.15, 0.85);
    }
    65% {
      transform: scale(0.95, 1.05);
    }
    75% {
      transform: scale(1.05, 0.95);
    }
    to {
      transform: scale(1, 1);
    }
  }
`;
const Margin = styled.div`
  margin: 15px;
`;

function LoginPage(props) {
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.history.push("./");
    console.log(errors);
  };

  return (
    <Container>
      <h2>로그인</h2>
      <Margin />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <label>이메일</label>
        <Controller
          type="email"
          name="email"
          control={control}
          rules={{
            required: "이메일을 입력해주세요.",
          }}
          as={<input name="email" variant="outlined" />}
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Margin />
        <label>비밀번호</label>
        <Controller
          type="password"
          name="password"
          control={control}
          rules={{
            required: "비밀번호를 입력해주세요.",
          }}
          as={<input name="password" type="password" variant="outlined" />}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Margin />

        <label class="checkbox">
          <input type="checkbox" />
          <span class="icon"></span>
          <span class="text">이메일 저장</span>
        </label>

        <button type="submit">로그인</button>
        <br />
      </LoginForm>
      <Link to="/RegisterPage">
        <h3>회원가입</h3>
      </Link>
      <br />
      <br />
    </Container>
  );
}

export default LoginPage;
