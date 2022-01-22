import Link from 'next/link'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

export const Container = styled.header`
  margin: 0 auto;
  max-width: 64rem;
  
  display: flex;
  justify-content: space-between;
  
  & > div {
    display: flex;
    align-items: center;
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      filter: brightness(90%);
    }
  }
`

export const Logo = styled.span``

export const Divider = styled.hr`
  margin: 0 1.5rem;
  height: 65%;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
`

export const Nav = styled.nav`
  display: flex;

  a + a {
    margin-left: 1.5rem;
  }
`

export const NavItem = styled(Link)``

export const ButtonGroup = styled.div`
  button + button {
    margin-left: 1rem;
  }
`

export const SearchContainer = styled.div`
  height: 3rem;
  max-height: 3rem;
  border-radius: 0.75rem;
  background: #202045;
  margin-left: 1.5rem;

  padding: 0.25rem 1.5rem;

  display: flex;
  align-items: center;
`

export const SearchIcon = styled(FiSearch)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.textLight};
`

export const SearchInput = styled.input`
  background: transparent;
  border: none;

  height: 100%;
  width: 16rem;
  outline: none;
  margin-left: 1rem;

  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`
