export default function EmailNotFound() {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Email Address Not Found
          </h2>

          <div className="mt-3 text-center">
            <p className="text-xs  text-gray-600 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl font-semibold py-2 ">
              Sorry, the entered email address doesn't exist in our records.
              Double-check or use a different one.
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
                <span className="flex justify-center text-[#6B6B66]">
                  Return to sign in
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
