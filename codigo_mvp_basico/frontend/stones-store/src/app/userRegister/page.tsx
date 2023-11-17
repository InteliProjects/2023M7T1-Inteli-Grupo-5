"use client";

/*
 * This script corresponds to the 'userRegister' route page (register new user)
 * */

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cursorTo } from "readline";
import { createUser } from "@/services/users";
import { createAddress } from "@/services/address";
import { getCEP } from "@/services/cep";
import { AxiosError } from "axios";
import RegistrationForm from "@/components/forms/RegisterForm";

export default function Register() {
  const router = useRouter();

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
  const cpfRef = useRef<HTMLInputElement>(null);
  const cnpjRef = useRef<HTMLInputElement>(null);
  const opensAtRef = useRef<HTMLInputElement>(null);
  const closesAtRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const neighborhoodRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const addressLineRef = useRef<HTMLInputElement>(null);

  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [pixCodeError, setPixCodeError] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [answerError, setAnswerError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [cnpjError, setCnpjError] = useState("");
  const [opensAtError, setOpensAtError] = useState("");
  const [closesAtError, setClosesAtError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cityError, setCityError] = useState("");
  const [neighborhoodError, setNeighborhoodError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [addressLineError, setAddressLineError] = useState("");

  const handleRegister = async () => {
    // Validate inputs before registration
    const name = nameRef.current?.value || "";
    const surname = surnameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const pixCode = pixCodeRef.current?.value || "";
    const question = questionRef.current?.value || "";
    const answer = answerRef.current?.value || "";
    const cpf = cpfRef.current?.value || "";
    const cnpj = cnpjRef.current?.value || "";
    const opensAt = opensAtRef.current?.value || "";
    const closesAt = closesAtRef.current?.value || "";
    const zipCode = zipCodeRef.current?.value || "";
    const country = countryRef.current?.value || "";
    const state = stateRef.current?.value || "";
    const city = cityRef.current?.value || "";
    const neighborhood = neighborhoodRef.current?.value || "";
    const street = streetRef.current?.value || "";
    const addressLine = addressLineRef.current?.value || "";

    // Check for empty or invalid inputs
    if (!name) setNameError("Please enter your name");
    if (!surname) setSurnameError("Please enter your surname");
    if (!email) setEmailError("Please enter your email");
    if (!password) setPasswordError("Please enter a password");
    if (!phone) setPhoneError("Please enter your phone number");
    if (!pixCode) setPixCodeError("Please enter your PIX code");
    if (!question) setQuestionError("Please enter a security question");
    if (!answer) setAnswerError("Please enter an answer");
    if (!cpf) setCpfError("Please enter your CPF");
    if (!cnpj) setCnpjError("Please enter your CNPJ");
    if (!opensAt) setOpensAtError("Please enter a open time");
    if (!closesAt) setClosesAtError("Please enter a close time");
    if (!zipCode) setZipCodeError("Please enter a zipCode");
    if (!country) setCountryError("Please enter a country");
    if (!state) setStateError("Please enter a state");
    if (!city) setCityError("Please enter a city");
    if (!neighborhood) setNeighborhoodError("Please enter a neighborhood");
    if (!street) setStreetError("Please enter a street");
    if (!addressLine) setAddressLineError("Please enter a addressLine");

    if (
      name &&
      surname &&
      email &&
      password &&
      phone &&
      pixCode &&
      question &&
      answer &&
      cpf &&
      cnpj &&
      opensAt &&
      closesAt &&
      country &&
      state &&
      city &&
      neighborhood &&
      street &&
      addressLine
    ) {
      try {
        const response = await createUser({
          name,
          surname,
          email,
          password,
          phone,
          pix: pixCode,
          question,
          answer,
          CPF: cpf,
          CNPJ: cnpj,
          opensAt,
          closesAt,
        });
        router.push("/login");
      } catch (e) {
        alert("Error creating user");
        console.log(e);
      }
    }
  };

  const getCepData = async () => {
    try {
      const zipCode = zipCodeRef.current?.value || "";
      const response = await getCEP(zipCode);
      countryRef.current!.value = "Brasil";
      stateRef.current!.value = response.state;
      cityRef.current!.value = response.city;
      neighborhoodRef.current!.value = response.neighborhood;
      streetRef.current!.value = response.street;

      setZipCodeError("");
    } catch (error) {
      const e = error as AxiosError;
      if (e.response?.status === 404) {
        setZipCodeError("CEP not found");
        countryRef.current!.value = "";
        stateRef.current!.value = "";
        cityRef.current!.value = "";
        neighborhoodRef.current!.value = "";
        streetRef.current!.value = "";
      }
    }
  };

  return (
    <div style={{ display: "flex" }} className="items-center">
      <RegistrationForm
        nameRef={nameRef}
        surnameRef={surnameRef}
        emailRef={emailRef}
        passwordRef={passwordRef}
        phoneRef={phoneRef}
        pixCodeRef={pixCodeRef}
        questionRef={questionRef}
        answerRef={answerRef}
        cpfRef={cpfRef}
        cnpjRef={cnpjRef}
        opensAtRef={opensAtRef}
        closesAtRef={closesAtRef}
        zipCodeRef={zipCodeRef}
        countryRef={countryRef}
        stateRef={stateRef}
        cityRef={cityRef}
        neighborhoodRef={neighborhoodRef}
        streetRef={streetRef}
        addressLineRef={addressLineRef}
        nameError={nameError}
        surnameError={surnameError}
        emailError={emailError}
        passwordError={passwordError}
        phoneError={phoneError}
        pixCodeError={pixCodeError}
        questionError={questionError}
        answerError={answerError}
        cpfError={cpfError}
        cnpjError={cnpjError}
        opensAtError={opensAtError}
        closesAtError={closesAtError}
        zipCodeError={zipCodeError}
        countryError={countryError}
        stateError={stateError}
        cityError={cityError}
        neighborhoodError={neighborhoodError}
        streetError={streetError}
        addressLineError={addressLineError}
        handleRegister={handleRegister}
        getCepData={getCepData}
      />

      <div
        className="flex-1 bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dunz5zfpt//f_auto,c_limit,w_1920,q_auto/v1/site-stone/home/nao-precisa-de-agencia')",
        }}
      ></div>
    </div>
  );
}
