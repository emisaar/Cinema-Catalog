import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'
import { FooterWrapper } from './styles'

const Footer = () => {
    return (
        <FooterWrapper>
            <Facebook
                sx={{
                    fontSize: '36px',
                    color: '#fff',
                    '&:hover': {
                        color: '#3b5998',
                        cursor: 'pointer'
                    }
                }}
            />
            <LinkedIn
                sx={{
                    fontSize: '36px',
                    color: '#fff',
                    '&:hover': {
                        color: '#0e76a8',
                        cursor: 'pointer'
                    }
                }}
            />
            <Instagram
                sx={{
                    fontSize: '36px',
                    color: '#fff',
                    '&:hover': {
                        color: '#e4405f',
                        cursor: 'pointer'
                    }
                }}
            />
            <GitHub
                sx={{
                    fontSize: '36px',
                    color: '#fff',
                    '&:hover': {
                        color: '#333',
                        cursor: 'pointer'
                    }
                }}
            />
        </FooterWrapper>
    )
}

export default Footer