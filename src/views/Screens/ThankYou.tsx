import { ThankYou } from "@/components/Icons";

const Thanks = () => {
  return (
    <div className="xl:mt-10">
      <header className="mx-auto mt-10 mb-4 w-fit flex flex-col gap-7 justify-between items-center">
        <ThankYou />

        <h1 className="font-bold text-2xl xl:text-3xl text-marine-blue">
          Thank you!
        </h1>
      </header>

      <p className="text-cool-gray text-center mb-12 xl:mb-0">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thanks;
