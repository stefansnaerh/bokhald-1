"use client";

import { useState } from "react";

import { FadeIn } from "../Fade/fade";

import cx from "classnames";

interface FormProps {
  nafn: string;
  kennitala: string;
  simanumer: string;
  netfang: string;
  astaeda: string;
  tilvisun: string;
}

export default function Form() {
  const [nafn, setNafn] = useState("");
  const [kennitala, setKennitala] = useState("");
  const [simanumer, setSimanumer] = useState("");
  const [netfang, setNetfang] = useState("");
  const [astaeda, setAstaeda] = useState("");

  const [formError, setFormError] = useState<boolean>();
  const [kennitalaError, setKennitalaError] = useState<boolean>(false);
  const [simanumerError, setSimanumerError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [astaedaError, setAstaedaError] = useState<boolean>(false);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    stateToChange: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    stateToChange(e.target.value);
    setError(false);
    setFormError(false);
  };

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();
    const SSDlength = /^\d{10}$/;
    const phoneLength = /^\d{7}$/;

    let noSubmit = false;

    if (SSDlength.test(kennitala) === false) {
      setKennitalaError(true);
      setFormError(true);
      noSubmit = true;
    }

    if (phoneLength.test(simanumer) === false) {
      setSimanumerError(true);
      setFormError(true);
      noSubmit = true;
    }

    if (nafn.length < 3) {
      setNameError(true);
      setFormError(true);
      noSubmit = true;
    }

    if (netfang.length < 3) {
      setEmailError(true);
      setFormError(true);
      noSubmit = true;
    }

    if (astaeda.length < 3) {
      setAstaedaError(true);
      setFormError(true);
      noSubmit = true;
    }

    if (noSubmit) return;

    const formData: FormProps = {
      nafn: "",
      kennitala: "",
      simanumer: "",
      netfang: "",
      astaeda: "",
      tilvisun: "",
    };

    const form = e.currentTarget as HTMLFormElement;

    Array.from(form.elements).forEach((field) => {
      if (field instanceof HTMLInputElement && field.name) {
        formData[field.name as keyof FormProps] = field.value;
      }
    });

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <form
      method="POST"
      onSubmit={handleOnSubmit}
      className="flex flex-col gap-fluid-18 md:gap-fluid-24 w-fill smmd:self-start smmd:w-[80%] lg:w-[60%]"
    >
      <FadeIn>
        <label htmlFor="nafn" className="flex flex-col gap-4 md:gap-6">
          Fullt nafn
          <input
            className={cx("xxs:h-40 xs:h-48", {
              ["border-red bg-softRed"]: nameError,
              ["border-greyInput"]: !nameError,
            })}
            placeholder="Fullt nafn"
            name="nafn"
            type="text"
            onChange={(e) => handleOnChange(e, setNafn, setNameError)}
          />
          {nameError && (
            <p className="text-sm text-red">Nafn þarf að vera rétt fyllt út</p>
          )}
        </label>
      </FadeIn>
      <FadeIn>
        <label htmlFor="simanumer" className="flex flex-col gap-4 md:gap-6">
          Símanúmer
          <input
            className={cx("xxs:h-40 xs:h-48", {
              ["border-red bg-softRed"]: simanumerError,
              ["border-greyInput"]: !simanumerError,
            })}
            placeholder="Símanúmer"
            name="simanumer"
            type="tel"
            onChange={(e) => handleOnChange(e, setSimanumer, setSimanumerError)}
          />
          {simanumerError && (
            <p className="text-sm text-red">
              Símanúmer þarf að vera rétt fyllt út
            </p>
          )}
        </label>
      </FadeIn>
      <FadeIn>
        <label htmlFor="netfang" className="flex flex-col gap-4 md:gap-6">
          Netfang
          <input
            className={cx("xxs:h-40 xs:h-48", {
              ["border-red bg-softRed"]: emailError,
              ["border-greyInput"]: !emailError,
            })}
            placeholder="Netfang"
            name="netfang"
            type="email"
            onChange={(e) => handleOnChange(e, setNetfang, setEmailError)}
          />
          {emailError && (
            <p className="text-sm text-red">
              Netfang þarf að vera rétt fyllt út
            </p>
          )}
        </label>
      </FadeIn>
      <FadeIn>
        <label htmlFor="astaeda" className="flex flex-col gap-4 md:gap-6">
          Skilaboð
          <textarea
            className={cx("xxs:h-[140px] sm:h-[160px]", {
              ["border-red bg-softRed"]: astaedaError,
              ["border-greyInput"]: !astaedaError,
            })}
            maxLength={500}
            placeholder={"Hvaða þjónust þarftu?"}
            name="astaeda"
            onChange={(e) => handleOnChange(e, setAstaeda, setAstaedaError)}
          />
          {astaedaError && (
            <p className="text-sm text-red">
              Við þurfum að fá ástæðu skilaboða
            </p>
          )}
        </label>
      </FadeIn>

      <FadeIn className="w-fill">
        <button
          type="submit"
          className={cx(
            " text-fontBlue w-fill py-fl  py-fluid-12  shadow-button rounded-16  text-md font-headline font-medium transition-all duration-300 ease-in-out",
            {
              ["bg-red"]: formError,
              ["bg-green hover:bg-hoverBlue"]: !formError,
            }
          )}
        >
          {!formError ? "Senda inn skilaboð" : "Úps"}
        </button>
      </FadeIn>
      {formError && (
        <p className="text-sm text-red text-center">
          Úps! Einhverjar upplýsingar hafa verið skrifaðar vitlausar inn
        </p>
      )}
    </form>
  );
}
