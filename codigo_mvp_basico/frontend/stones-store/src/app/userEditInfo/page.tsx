"use client";

/*
 * This script corresponds to the 'userEditInfo' route page (edit user info)
 * */

import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { updateUser, deleteUser, getUser, User } from "@/services/users";
import { AxiosError } from "axios";
import EditUserInfoForm from "@/components/forms/EditUserInfoForm";
import { AuthContext } from "@/contexts/auth.context";
import LoadingElement from "@/components/LoadingElement";

export default function Register() {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<User>({} as User);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const pixCodeRef = useRef<HTMLInputElement>(null);
  const questionRef = useRef<HTMLInputElement>(null);
  const answerRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);

  const getUserInfo = async () => {
    try {
      const token = authContext?.state.token || "";
      const { user } = await getUser("0", token);
      setCurrentUser(user);
    } catch (e) {
      const error = e as AxiosError;
      if (error.response?.status === 401) {
        authContext?.logout();
        alert("Por favor faça login para acessar esta página");
        router.push("/login");
      }
      console.log(e);
    }
  };

  useEffect(() => {
    if (!authContext?.state.loading) {
      if (!authContext?.state.authenticated) {
        window.location.href = "/login";
      }
    }
    if (!authContext?.state.loading && authContext?.state.authenticated) {
      getUserInfo();
    }
    setLoading(authContext?.state.loading || false);
  }, [authContext?.state.loading, authContext?.state.authenticated]);

  useEffect(() => {
    if (
      currentUser.id &&
      nameRef.current &&
      surnameRef.current &&
      emailRef.current &&
      passwordRef.current &&
      phoneRef.current &&
      pixCodeRef.current &&
      questionRef.current &&
      answerRef.current
    ) {
      nameRef.current.value = currentUser.name;
      surnameRef.current.value = currentUser.surname;
      emailRef.current.value = currentUser.email;
      passwordRef.current.value = currentUser.password;
      phoneRef.current.value = currentUser.phone;
      pixCodeRef.current.value = currentUser.pix;
      questionRef.current.value = currentUser.question;
      answerRef.current.value = currentUser.answer;
    }
  }, [currentUser]);

  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [pixCodeError, setPixCodeError] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [answerError, setAnswerError] = useState("");

  const handleUserUpdate = async () => {
    // Validate inputs before registration
    const name = nameRef.current?.value || "";
    const surname = surnameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const pixCode = pixCodeRef.current?.value || "";
    const question = questionRef.current?.value || "";
    const answer = answerRef.current?.value || "";

    // Check for empty or invalid inputs
    if (!name) setNameError("Please enter your name");
    if (!surname) setSurnameError("Please enter your surname");
    if (!email) setEmailError("Please enter your email");
    if (!password) setPasswordError("Please enter a password");
    if (!phone) setPhoneError("Please enter your phone number");
    if (!pixCode) setPixCodeError("Please enter your PIX code");
    if (!question) setQuestionError("Please enter a security question");
    if (!answer) setAnswerError("Please enter an answer");

    if (
      name &&
      surname &&
      email &&
      password &&
      phone &&
      pixCode &&
      question &&
      answer
    ) {
      try {
        const token = localStorage.getItem("token") || "";
        currentUser.name = name;
        currentUser.surname = surname;
        currentUser.email = email;
        currentUser.password = password;
        currentUser.phone = phone;
        currentUser.pix = pixCode;
        currentUser.question = question;
        currentUser.answer = answer;

        const response = await updateUser("0", currentUser, token);
        router.push("/");
      } catch (e) {
        alert("Error updating user");
        console.log(e);
      }
    }
  };

  const handleDeleteUserAccount = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar sua conta?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token") || "";
        const response = await deleteUser("0", token);
        alert("Conta deletada com sucesso!");
        localStorage.removeItem("token");
        router.push("/");
      } catch (e) {
        alert("Error deleting user");
        console.log(e);
      }
    }
  };

  const handleCancel = async () => {
    try {
      router.push("/");
    } catch (e) {
      alert("Error canceling user update");
      console.log(e);
    }
  };

  return (
    <>
      {loading ? (
        LoadingElement()
      ) : (
        <div style={{ display: "flex" }} className="items-center">
          <div style={{ flex: 1, borderRadius: "5px" }} className="p-10">
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              Editar conta
            </h1>
            <EditUserInfoForm
              currentUser={currentUser}
              nameRef={nameRef}
              setNameError={setNameError}
              surnameRef={surnameRef}
              setSurnameError={setSurnameError}
              emailRef={emailRef}
              setEmailError={setEmailError}
              passwordRef={passwordRef}
              setPasswordError={setPasswordError}
              phoneRef={phoneRef}
              setPhoneError={setPhoneError}
              pixCodeRef={pixCodeRef}
              setPixCodeError={setPixCodeError}
              questionRef={questionRef}
              setQuestionError={setQuestionError}
              answerRef={answerRef}
              setAnswerError={setAnswerError}
              handleUserUpdate={handleUserUpdate}
              handleDeleteUserAccount={handleDeleteUserAccount}
              handleCancel={handleCancel}
              nameError={nameError}
              surnameError={surnameError}
              emailError={emailError}
              passwordError={passwordError}
              phoneError={phoneError}
              pixCodeError={pixCodeError}
              questionError={questionError}
              answerError={answerError}
            />
          </div>
          <div
            className="flex-1 bg-cover bg-center h-screen"
            style={{
              backgroundImage:
                "url('https://www.foregon.com/media/uploads/2022/11/38stonetelefone.jpeg')",
            }}
          ></div>
        </div>
      )}
    </>
  );
}
