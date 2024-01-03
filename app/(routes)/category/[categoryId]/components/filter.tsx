import { Color, Size } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import React from 'react'

interface FilterProps {
    data: (Size | Color) []
    name: string
    valueKey: string
}

const Filter:React.FC<FilterProps> = ({data,name,valueKey}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const handleSelect = (id: string) => {
        const current = queryString.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        };

        if(current[valueKey] === id) {
            query[valueKey] = null
        }
        
    }


  return (
    <div>Filter</div>
  )
}

export default Filter