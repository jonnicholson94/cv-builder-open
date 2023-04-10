
import { Inter } from 'next/font/google'
import * as HoverCard from "@radix-ui/react-hover-card"

const inter = Inter({ subsets: ['latin'] })

const HelpCard = ({ children, content, side }) => {

    return (
        <HoverCard.Root>
            <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
            <HoverCard.Portal >
                <HoverCard.Content className={`help-card-portal auto-height flex-center flex-column ${inter.className}`} sideOffset={20} side={side}>
                    <p className="help-card-content margin-vertical-10">{content}</p>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}

export default HelpCard