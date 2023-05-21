import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'
import { FooterWrapper } from './styles'

const Footer = () => {
    return (
        <FooterWrapper>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
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
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
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
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
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
            </a>
            <a href="https://github.com/emisaar" target="_blank" rel="noopener noreferrer">
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
            </a>
        </FooterWrapper>
    )
}

export default Footer