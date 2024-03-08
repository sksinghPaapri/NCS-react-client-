import { Link } from "react-router-dom";

export default function PasswordEmailSent() {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Password Reset Email Sent
          </h2>

          <div className="mt-3 text-center">
            <p className="text-xs  text-gray-600 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl font-semibold py-2 ">
              Please check your email for further instructions. If you don't
              receive an email within the next few minutes, please make sure to
              check your spam folder.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-4  sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div className="flex flex-col items-center">
                <p className="flex justify-center  ">
                  Need help?{" "}
                  <span className="text-[#6B6B66]">Contact our support</span>{" "}
                </p>
                <span className="flex justify-center text-[#6B6B66] cursor-pointer">
                  <Link to={"/login"}>Return to sign in</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
