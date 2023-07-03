import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Evento 1</p>
          <p className="text-sm text-muted-foreground">Usuario 1</p>
        </div>
        <div className="ml-auto font-medium">+Info 1</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Evento 2</p>
          <p className="text-sm text-muted-foreground">Usuario 1</p>
        </div>
        <div className="ml-auto font-medium">+Más info</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Evento 3</p>
          <p className="text-sm text-muted-foreground">Usuario 2</p>
        </div>
        <div className="ml-auto font-medium">+Info</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Evento 4</p>
          <p className="text-sm text-muted-foreground">Usuario 2</p>
        </div>
        <div className="ml-auto font-medium">+Info</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Evento 5</p>
          <p className="text-sm text-muted-foreground">Usuario 2</p>
        </div>
        <div className="ml-auto font-medium">+Info 2</div>
      </div>
    </div>
  )
}
