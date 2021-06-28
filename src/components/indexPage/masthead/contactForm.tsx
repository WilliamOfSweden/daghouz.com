  
import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles((theme: Theme) =>

    createStyles({

        btn: {

            background: `#fff`,
            letterSpacing: `1px`,
            marginTop: `2rem`,
            transition: `0.5s`,

            '&:hover': {

                backgroundColor: '#ddd',
            
            }

        },

        textField: {

            display: `flex`,
            marginBottom: theme.spacing(2),

        },

        textArea: {

            display: `flex`,
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(4),

        },

    }),

)


interface FormProps {

    enctype: string

    hidden?: boolean

}


const StyledForm = styled.form<FormProps>`

    width: 100%;
    -webkit-appearance: none;

    ${ ({ hidden }) =>
        hidden &&
        `
            visibility: hidden;
        `
    }

    &:focus {

        outline: none;

    }

`


interface Props {

    hidden?: boolean

}


const ContactForm: FC<Props> = ({ hidden }) => {

    const classes = useStyles()

    return (

        <StyledForm
            name='contact-form'
            method='POST'
            enctype='application/x-www-form-urlencoded'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            id='contact-form'
            hidden={ hidden }
        >

            <input
                type='hidden'
                name='form-name'
                value='contact-form'
            />

            <p hidden>

                <label>

                    <input name='bot-field' />

                </label>

            </p>

            <TextField
                autoComplete='name'
                className={ classes.textField }
                color='secondary'
                label='Name'
                name='name'
                required
                type='text'
            />

            <TextField
                autoComplete='email'
                className={ classes.textField }
                color='secondary'
                label='Email'
                name='email'
                required
                type='email'
            />

            <TextField
                autoComplete='organization'
                className={ classes.textField }
                color='secondary'
                label='Company'
                name='organization'
                type='organization'
            />

            <TextField
                className={ classes.textArea }
                color='secondary'
                id='outlined-textarea'
                label='Message'
                name='message'
                multiline
                required
                rows={ 6 }
                // variant='outlined'
            />

            <Button className={ classes.btn } fullWidth name='send' size='large' type='submit' variant='contained' >
                
                Send
                
            </Button>

        </StyledForm>

    )

}


export default ContactForm
