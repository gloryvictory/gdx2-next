'use client'

import MapLibreGL_Map from '@/components/Map/Map';
import Metadata from '@/components/Metadata/Metadata';


export default function MapPage() {
  const title: string  = "Отчеты  | Карта"

  return(
    <>
    <Metadata seoTitle={title} seoDescription={title} />
    <MapLibreGL_Map/>
    </>
    
  ) 
}
