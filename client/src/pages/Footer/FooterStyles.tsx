import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const FooterContainer = styled('div')(({ theme }) => ({
  minHeight: '12vh',
  padding: '15px 0',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
}))

export const NavContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 'max-content',
  marginBottom: '20px'
}))

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none'
}))

export const CopyrightText = styled('div')(({ theme}) => ({

}))