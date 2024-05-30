import { Text } from "@/app/_components/text";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CardComponent({ count, title, icon, className }: { count: number, title: string, icon: React.ReactNode, className?: string }) {
    return (
        <Card className='w-full space-y-2 p-4 divide-y-2'>
            <div className="flex w-full justify-between items-center">
                <Text size='s' muted className='font-semibold'>{title}</Text>
                <div className='text-gray-500/70'>
                    {icon}
                </div>
            </div>

            <div className='py-2'>
                <Text className='text-gray-800'>Found: <span className={cn('font-bold', className)}>{count}</span></Text>
            </div>
        </Card>
    )
}