import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom"

export const ErrorPageLayout = () => {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === "string") {
    errorMessage = error
  } else {
    errorMessage = "Unknown error"
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-light-11 dark:bg-dark-12">
      <h1 className="text-3xl font-bold leading-normal tracking-[-1.125px] text-dark-08 dark:text-white">
        Oops!
      </h1>
      <div className="flex flex-col items-center gap-2">
        <p className="text-base font-medium tracking-[-0.1px] text-[#858BB2] dark:text-light-05">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-[#858BB2] dark:text-light-05">
          <i>{errorMessage}</i>
        </p>
      </div>
      <Link
        to="/"
        className="inline-block border-b border-b-[#858BB2] text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-[#858BB2] transition-colors hover:border-b-primary-01 dark:border-b-light-05 dark:text-light-05 dark:hover:border-b-primary-01"
      >
        Back to Home
      </Link>
    </div>
  )
}
