import styled from 'styled-components'

interface RegularTextProps {
  size?: 'sm' | 'm' | 's' | 'l'
  color?: 'text' | 'white' | 'red'
  weight?: string | number
}

interface TitleTextProps {
  size?: 'm' | 's' | 'l' | 'xl'
  color?: 'text' | 'white' | 'secundary-bg' | 'bg'
  weight?: string | number
}

export const TextRegular = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.FontSizes[`text-regular-${size ?? 's'}`]};
  line-height: 150%;
  font-weight: ${({ weight }) => weight ?? 400};
`
export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.FontSizes[`title-regular-${size ?? 'm'}`]};
  line-height: 108%;
  font-weight: ${({ weight }) => weight ?? 700};
`