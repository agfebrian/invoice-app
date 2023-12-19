import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "~/lib"
import { buttonVariants } from "./button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "border-none bg-white p-3 text-dark-08 shadow-[0px_10px_20px_0px_rgba(72,84,159,0.25)] dark:bg-dark-03 dark:text-white",
        className,
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full space-y-1",
        head_row: "flex",
        head_cell: "rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 hover:bg-primary-07/50 rounded-md relative focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 aria-selected:text-primary-01 text-dark=08 text-[15px] font-bold leading-[15px] tracking-[-0.25px]",
        ),
        day_range_end: "day-range-end",
        day_selected: "",
        day_today: "text-primary-06",
        day_outside: "opacity-50 aria-selected:aria-selected:opacity-30",
        day_disabled: "opacity-50",
        day_range_middle: "",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        IconLeft: ({ ...props }) => (
          <ChevronLeft {...props} className="h-4 w-4" />
        ),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        IconRight: ({ ...props }) => (
          <ChevronRight {...props} className="h-4 w-4" />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
