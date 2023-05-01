import { ThankYou } from "@/components/Icons";

const Thanks = () => {
  return (
    <div>
      <header className="mx-auto mt-10 mb-4 w-fit flex flex-col gap-7 justify-between items-center">
        <ThankYou height={60} width={60} />

        <h1 className="font-bold text-2xl text-marine-blue">Thank you!</h1>
      </header>

      <p className="text-cool-gray text-center mb-12">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thanks;
