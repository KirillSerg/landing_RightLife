// import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Form.module.scss";

const schema = yup
  .object({
    name: yup
      .string()
      .required()
      .min(2, "min 2 simbolo")
      .max(60, "max 60 simbolo"),
    email: yup
      .string()
      .required()
      .email()
      .min(2, "min 2 simbolo")
      .max(100, "max 100 simbolo"),
    phone: yup
      .string()
      .required()
      .matches(/^(\+3)$/, "dovrebbe iniziare con il codice del tuo paese +3"),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    console.log(formData);
  };

  return (
    <div className={styles.wrap}>
      <h1>Iscriviti alla nostra newsletter, è gratis!</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_group}>
          <div>
            <input
              className={`${styles.input} ${
                !!errors?.name?.message && styles.active
              }`}
              placeholder="Il tuo nome"
              type="text"
              {...register("name")}
            />
            <span>{errors?.name?.message || ""}</span>
          </div>

          <div>
            <input
              className={`${styles.input} ${
                !!errors?.email?.message && styles.active
              }`}
              placeholder="Email"
              type="email"
              {...register("email")}
            />
            <span>{errors?.email?.message || ""}</span>
          </div>

          <div>
            <input
              className={`${styles.input} ${
                !!errors?.phone?.message && styles.active
              }`}
              placeholder="Telefono"
              type="tel"
              {...register("phone")}
            />
            <div>
              <label className={styles.label}>+3X (XXX) XXX - XX - XX</label>
            </div>
            <span>{errors?.phone?.message || ""}</span>
          </div>
        </div>

        <button disabled={!isValid} type="submit">
          Inviare
        </button>
      </form>
    </div>
  );
};

export default Form;
