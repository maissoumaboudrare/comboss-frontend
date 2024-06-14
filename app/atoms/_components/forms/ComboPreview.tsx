import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 10 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ComboPreview() {
  return (
    <ScrollArea className="h-24 w-full rounded-md border">
      <div className="p-4">
        {tags.map((tag, index) => (
          <div key={index}>
            <div className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
