import React, { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Title } from "@components/title";
import { Contact as C } from "@styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import { aboutMe } from "src/common/data";

interface FormValues {
    name: string;
    email: string;
    title: string;
    message: string;
}

const Contact: React.FC = () => {
    const form = useRef<HTMLInputElement | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();
    const onSubmit = async () => {
        emailjs
            .sendForm(
                "service_6g22b0z",
                "template_vf3fm3j",
                form.current,
                "4ZEMv9RgXxDesQrFb",
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
        reset();
    };

    return (
        <C.Container>
            <Title title="Contact" subtitle="Contact" />
            <C.ContactInformation>
                <C.ContactItems>
                    <C.ContactIcon>
                        <PhoneIcon />
                    </C.ContactIcon>
                    <C.ContactTitle>Phone</C.ContactTitle>
                    <C.ContactContent>{aboutMe.phone}</C.ContactContent>
                </C.ContactItems>
                <C.ContactItems>
                    <C.ContactIcon>
                        <EmailIcon />
                    </C.ContactIcon>
                    <C.ContactTitle>Email</C.ContactTitle>
                    <C.ContactContent>{aboutMe.email}</C.ContactContent>
                </C.ContactItems>
            </C.ContactInformation>
            <C.ContactForm>
                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <C.InputGroup>
                        <input
                            {...register("name", {
                                required: true,
                                maxLength: 50,
                            })}
                            id="name"
                            placeholder="Name"
                            name="name"
                        />
                        {errors.name && <p>The field Name is required</p>}
                    </C.InputGroup>
                    <C.InputGroup>
                        <input
                            {...register("email", {
                                required: "The field Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "The field Email is invalid",
                                },
                            })}
                            id="email"
                            placeholder="Email"
                            name="email"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </C.InputGroup>
                    <C.InputGroup>
                        <input
                            {...register("title", {
                                required: true,
                                maxLength: 70,
                            })}
                            placeholder="Title"
                            id="title"
                            name="title"
                        />
                        {errors.title && <p>The field Title is required</p>}
                    </C.InputGroup>
                    <C.InputGroup>
                        <textarea
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                            placeholder="Message"
                            id="message"
                            name="message"
                        />
                        {errors.message && <p>The field Message is required</p>}
                    </C.InputGroup>
                    <Button variant="contained" type="submit">
                        Send Message
                    </Button>
                </form>
            </C.ContactForm>
        </C.Container>
    );
};
export default Contact;
