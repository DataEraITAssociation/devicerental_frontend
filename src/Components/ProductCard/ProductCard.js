import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import RentCalender from '../RentCalender/RentCalender';
// import machineOne from '../../Assets/Images/machineOne.jpeg';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}));
const ProductCard = (props) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardHeader
                    title={props.data.title}
                    subheader={`Quantity is ${props.data.quantity}`}
                />
                <CardMedia
                    className={classes.media}
                    image={props.data.image}
                    title={props.data.imageName}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.data.rate}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <MonetizationOnIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph align="left">Name: {props.data.title}</Typography>
                        <Typography paragraph align="left">Quantity: {props.data.quantity}</Typography>
                        <Typography paragraph align="left">Price: {props.data.rate}</Typography>
                        <Typography paragraph align="left">Description: {props.data.detailedDescription}</Typography>
                        <Typography paragraph align="left">
                            <Link href={props.data.tutorial}>
                                Tutorials
                            </Link>
                        </Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button component="a" href="https://www.youtube.com/watch?v=Bg_tJvCA8zw">
                                <iframe width="80%" height="100px" src={props.data.youTube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </ListItem>
                        </List>
                        <RentCalender />
                    </CardContent>
                </Collapse>
            </Card>
        </React.Fragment>
    );
};

export default ProductCard;