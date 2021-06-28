import React, { FC, Fragment, JSXElementConstructor, ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { useSpring, animated } from '@react-spring/web'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'


const useStyles = makeStyles((theme: Theme) =>

    createStyles({

        box: {

            backgroundColor: theme.palette.primary.main,

        },

        container: {

            '&:focus': {
 
                outline: `none`, 
            
            },

        },

        desktopOnly: {

            display: 'none',

            [theme.breakpoints.up('sm')]: {

                display: 'inherit',
                
            },

        },

        icon: {

            fill: `#fff`,

        },

        iconButton: {

            display: `flex`,
            marginButton: `-10rem`,
            marginRight: '-8px',

        },

        fade: {

            width: `100%`,

        },

        mobileOnly: {

            display: 'inherit',
            marginTop: theme.spacing(4),

            [theme.breakpoints.up('sm')]: {

                display: 'none',
                
            },

        },

        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

    }),

)


interface FadeProps {

    children?: React.ReactElement
    in: boolean
    onEnter?: () => {}
    onExited?: () => {}
    className: string

}


const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    
    const { in: open, children, onEnter, onExited, ...other } = props
    const style = useSpring({
      
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        
        onStart: () => {
          
            if (open && onEnter) {
            
                onEnter()
          
            }
        },

        onRest: () => {
        
            if (!open && onExited) {
          
                onExited()
            }
        },

    })

    return (

        <animated.div ref={ ref } style={ style } { ...other }>
        
            {children}
      
        </animated.div>
    
    )

})


interface Props {

    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined

    buttonText: string

    mobileOnly?: boolean

}


const ModalComponent: FC<Props> = ({ children, buttonText, mobileOnly }) => {

    const classes = useStyles()
    
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        
        setOpen(true)
    
    }

    const handleClose = () => {

        setOpen(false)

    }

    return (

        <Fragment>

            <Button 
                className={ mobileOnly ? classes.mobileOnly : classes.desktopOnly }
                color='primary'
                fullWidth={ mobileOnly }
                onClick={ handleOpen }
                variant='contained'
                size='large'
            >

                { buttonText }
                
            </Button>

            <Modal
                aria-labelledby='spring-modal-title'
                aria-describedby='spring-modal-description'
                className={ classes.modal }
                open={ open }
                onClose={ handleClose }
                closeAfterTransition
                BackdropComponent={ Backdrop }
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Container className={ classes.container } maxWidth='sm'>
                
                    <Fade in={ open } className={ classes.fade }>

                        <Box
                            borderRadius='10px'
                            className={ classes.box }
                            pb={ 5 }
                            pt={ 1 }
                            px={ 5 }
                            width='100%'
                        >

                            <Box
                                display='flex'
                                justifyContent='flex-end'
                                width='100%'
                            >

                                <IconButton
                                    className={ classes.iconButton }
                                    onClick={ handleClose }
                                >

                                    <CloseIcon className={ classes.icon } />

                                </IconButton>

                            </Box>

                            { children }

                        </Box>

                    </Fade>

                </Container>
            
            </Modal>
        
        </Fragment>

    )

}


export default ModalComponent
