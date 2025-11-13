import { useMemo } from 'react'

export function useContactInfo() {
  return useMemo(
    () => ({
      owner: 'Sourav Singh',
      phone: '+91 98529 73324',
      email: 'build@rajconstruction.example',
      address: '30, Raj Construction Industrial Area, Kokar, Ranchi · 834004',
      officeHours: 'Mon – Sat · 9 AM – 7 PM',
      mapEmbedUrl:
        'https://www.google.com/maps?q=30%20Raj%20Construction%20Industrial%20Area%20Kokar%2C%20Ranchi%20834004&output=embed'
    }),
    []
  )
}
