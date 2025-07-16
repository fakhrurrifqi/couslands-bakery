"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountrySelectProps {
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
  name?: string;
}

const countries = [
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "United Kingdom", code: "GB" },
  { name: "Australia", code: "AU" },
  { name: "Germany", code: "DE" },
  { name: "France", code: "FR" },
  { name: "Japan", code: "JP" },
  { name: "India", code: "IN" },
  { name: "Brazil", code: "BR" },
  { name: "South Africa", code: "ZA" },
  { name: "Indonesia", code: "ID" },

  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Argentina", code: "AR" },
  { name: "Austria", code: "AT" },
  { name: "Bangladesh", code: "BD" },
  { name: "Belgium", code: "BE" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Egypt", code: "EG" },
  { name: "Finland", code: "FI" },
  { name: "Greece", code: "GR" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Malaysia", code: "MY" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nigeria", code: "NG" },
  { name: "Norway", code: "NO" },
  { name: "Pakistan", code: "PK" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Russia", code: "RU" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Singapore", code: "SG" },
  { name: "South Korea", code: "KR" },
  { name: "Spain", code: "ES" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Thailand", code: "TH" },
  { name: "Turkey", code: "TR" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "Vietnam", code: "VN" },
];

const CountrySelect = ({ onChange, value, disabled, name }: CountrySelectProps) => {
  return (
    <Select onValueChange={onChange} value={value} disabled={disabled} name={name}>
      <SelectTrigger className="w-full bg-white dark:bg-paletteMaroonDarkest border-paletteGrayLight dark:border-paletteMaroonDark text-paletteTextDark dark:text-paletteTextLight focus:ring-paletteMaroonMedium focus:ring-offset-palettePinkLighter">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-paletteMaroonDarkest border-paletteGrayLight dark:border-paletteMaroonDark text-paletteTextDark dark:text-paletteTextLight">
        {countries.map((country) => (
          <SelectItem
            key={country.code}
            value={country.name}
            className="cursor-pointer focus:bg-palettePinkLighter dark:focus:bg-paletteMaroonDark"
          >
            {country.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CountrySelect;
