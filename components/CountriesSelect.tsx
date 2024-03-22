"use client";
import Select from "react-select"
import { Country } from "@/data/countries";
import { countries } from "@/data/countries"

interface CountryOption {
  value: string,
  label: string,
}

export default function() {
  const optionsForSelect: CountryOption[] = countries.map((country: Country) => {
    return {
      value: country.code,
      label: country.name
    }
  })
  
  return (
    <Select
      className="w-80"
      options={optionsForSelect}
    />
  )
}