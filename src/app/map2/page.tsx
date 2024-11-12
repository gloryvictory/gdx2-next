'use client'

// import MapLibreGL_Map from '@/components/Map/Map';
import Metadata from '@/components/Metadata/Metadata';
import OL_Map from '@/components/OLMap/OLMap';


export default function OLMapPage() {
  const title: string  = "Отчеты  | Карта2"

  return(
    <>
    <Metadata seoTitle={title} seoDescription={title} />
    <OL_Map/>
    </>
    
  ) 
}
