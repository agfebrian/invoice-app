import * as React from "react"
import { format } from "date-fns"
import { cn } from "~/lib"
import { Button } from "../shadcn/button"
import { Calendar } from "../shadcn/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/popover"
import { SelectSingleEventHandler } from "react-day-picker"

interface Props {
  initialValue: Date
  setDate: (day: Date) => void
}

export function DatePicker({ initialValue, setDate }: Props) {
  const [selectedDate, setSelectedDate] = React.useState<Date>(initialValue)

  const handleSelect: SelectSingleEventHandler = (day: Date | undefined) => {
    setSelectedDate(day!)
    setDate(day!)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "flex h-12 w-full items-center justify-between border-light-05 text-left text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 focus:ring-2 dark:border-dark-04 dark:bg-dark-03 dark:text-white",
            !selectedDate && "text-muted-foreground",
          )}
        >
          <span className="mt-[5px] self-center">
            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-2 h-4 w-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3334 2H14C15.1027 2 16 2.89734 16 4V14C16 15.1027 15.1027 16 14 16H2C0.897339 16 0 15.1027 0 14V4C0 2.89734 0.897339 2 2 2H2.66663V0.666626C2.66663 0.298706 2.96533 0 3.33337 0H4C4.36804 0 4.66663 0.298706 4.66663 0.666626V2H11.3334V0.666626C11.3334 0.298706 11.632 0 12 0H12.6666C13.0347 0 13.3334 0.298706 13.3334 0.666626V2ZM14 14.6666C14.3673 14.6666 14.6666 14.3673 14.6666 14V6.69336H1.33337V14C1.33337 14.3673 1.63269 14.6666 2 14.6666H14Z"
              fill="#7E88C3"
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
