import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export default function LinkButton({to, className, children} : {to: string, className?: string, children: React.ReactNode}) {
  return (
    <Button asChild className={`bg-secondary ${className}`}>
        <Link to={to}>
            {children}
        </Link>
    </Button>
  )
}
