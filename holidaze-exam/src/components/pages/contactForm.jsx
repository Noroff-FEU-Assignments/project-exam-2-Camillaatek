import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../utils/yupSchemas";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ContactForm = ({ sendContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = (formData) => {
    console.log("FormData:", formData);

    sendContact(formData).catch(console.error);
    alert("your message has been sent!");
  };

  return (
    <div className="contact__field">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name</p>
        <input {...register("name")} placeholder="Name.." />
        {errors.name && (
          <span>
            {errors.name.message}
            <ErrorOutlineIcon style={{ color: "red" }} />
          </span>
        )}

        <p>Email</p>
        <input {...register("email")} placeholder="Email.." />
        {errors.email && (
          <span>
            {errors.email.message}
            <ErrorOutlineIcon style={{ color: "red" }} />
          </span>
        )}

        <p>Subject</p>
        <input {...register("subject")} placeholder="Subject.." />
        {errors.subject && (
          <span>
            {errors.subject.message}
            <ErrorOutlineIcon style={{ color: "red" }} />
          </span>
        )}

        <p>Message</p>
        <textarea {...register("message")} placeholder="Message.." />
        {errors.message && (
          <span>
            {errors.message.message}
            <ErrorOutlineIcon style={{ color: "red" }} />
          </span>
        )}

        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
