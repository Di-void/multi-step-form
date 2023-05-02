import InfoForm from "@/components/Forms/InfoForm";

const PersonalInfo = () => {
  return (
    <div>
      <header className="mb-2">
        <h1 className="text-marine-blue text-2xl xl:text-3xl font-bold">
          Personal info
        </h1>
      </header>

      <p className="text-cool-gray text-lg mb-4 xl:mb-7">
        Please provide your name, email address and phone number.
      </p>

      <InfoForm />
    </div>
  );
};

export default PersonalInfo;
