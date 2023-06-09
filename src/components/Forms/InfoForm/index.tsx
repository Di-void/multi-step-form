import { useForm } from "react-hook-form";
import { useStore } from "@/stores/generic-store";
import { PersonalInfoForm } from "@/lib";
import FooterNav from "@/components/FooterNav";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("This field is required"),
  email: z
    .string()
    .nonempty("This field is required")
    .email("Email format is not valid"),
  telephone: z.number({
    required_error: "Phone Number is required",
    invalid_type_error: "Enter a valid Number",
  }),
});

type FormData = z.infer<typeof schema>;

const InfoForm = () => {
  const nextPage = useStore((state) => state.nextPage);
  const prevPage = useStore((state) => state.prevPage);
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      telephone: undefined,
    },
  });
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = form;

  const onSubmit = () => {
    if (isValid) {
      nextPage();
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {PersonalInfoForm.map((item) => {
          return (
            <div key={item.id}>
              <header className="flex justify-between">
                <label
                  htmlFor={item.id}
                  className="capitalize text-marine-blue font-medium"
                >
                  {item.field}
                </label>

                <h4 className="text-strawberry-red capitalize font-bold">
                  {errors[item.id]?.message}
                </h4>
              </header>
              <input
                className={`block border ${
                  errors[item.id]
                    ? "border-strawberry-red focus:ring-strawberry-red focus:border-strawberry-red"
                    : "border-cool-gray focus:ring-purplish-blue focus:border-purplish-blue"
                } mt-1 p-3 rounded-md text-marine-blue font-bold w-full outline-none focus:ring-1`}
                type={item.type}
                id={item.id}
                placeholder={item.placeholder}
                {...register(item.id, {
                  valueAsNumber: item.type === "number" ? true : false,
                })}
              />
            </div>
          );
        })}

        <FooterNav backBtnIsVisible={false} prevPage={prevPage} />
      </form>
    </>
  );
};

export default InfoForm;
