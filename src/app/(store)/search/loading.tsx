import { Suspense } from 'react'

import { CurrentSearch } from '@/app/(store)/search/current-search'
import { Skeleton } from '@/components/skeleton'

export default function SearchLoading() {

    return (
        <div className="flex flex-col gap-4">

            <Suspense>
                <CurrentSearch />
            </Suspense>

            <div className="grid grid-cols-3 gap-6">
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
                <Skeleton className="h-[400px]" />
            </div>
        </div>
    )
}