import { useForm } from "react-hook-form";
import { useGenericStore } from "@/stores/generic-store";
import { PersonalInfoForm } from "@/lib";
import FooterNav from "@/components/FooterNav";
import { DevTool } from "@hookform/devtools";
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
  const nextPage = useGenericStore((state) => state.nextPage);
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
    control,
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
                  errors[item.id] ? "border-strawberry-red" : "border-cool-gray"
                } mt-1 p-3 rounded-md text-marine-blue font-bold w-full outline-none`}
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

        <FooterNav backBtnIsVisible={false} />
      </form>
      // TODO Remove Devtool after project completion
      <DevTool control={control} />
    </>
  );
};

export default InfoForm;
